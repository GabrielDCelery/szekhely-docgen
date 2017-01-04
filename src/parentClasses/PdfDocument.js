'use strict';

const PDFKit = require ('pdfkit');
const fs = require('fs');
const Log = require('log');

class PdfDocument {
	constructor() {
		this.doc = new PDFKit({ autoFirstPage : false });
		this.log = new Log('info');
	}

	static _splitArrayIntoEqualBlocks(_array, _numberOfBlocks) {
		const _blocks = [];
		const _numOfElementsInABlock = Math.ceil(_array.length / _numberOfBlocks);

		for(let _i = 0, _iMax  = _numberOfBlocks; _i < _iMax; _i++){
			let _begin = _i * _numOfElementsInABlock;
			let _end = _begin + _numOfElementsInABlock;
			_blocks.push(_array.slice(_begin, _end));
		}

		return _blocks;
	}

	static _capitalizeLetters(_string, _replaceAfters) {
		let _letters = _string.split('');

		if(_letters[0]) {
			_letters[0] = _letters[0].toUpperCase();
		}

		_letters.forEach((_letter, _index) => {
			for(let _i = 0, _iMax = _replaceAfters.length; _i < _iMax; _i++){
				if(_replaceAfters[_i] === _letter) {
					_letters[_index + 1] = _letters[_index + 1].toUpperCase();
					break;
				}
			}
		});

		return _letters.join('');
	}

	static _normalizeText(_string){
		let _newString = _string.toLowerCase();

		_newString = _newString.replace(/ő/g, 'ö');
		_newString = PdfDocument._capitalizeLetters(_newString, [' ', '-', '&', '+']);

		return _newString;
	}

	_printHeaderText(_text) {

	}

	_printTableWithCellsAndContents(_texts) {
		_texts.forEach((_text, _index) => {
			let _cellOffsetX = _index  % this.config.content.columns === 0 ? 0 : this.cellWidth * (_index  % this.config.content.columns);
			let _cellOffsetY = Math.floor(_index / this.config.content.columns) * this.cellHeight;

			_cellOffsetX = this.marginLeft + _cellOffsetX;
			_cellOffsetY = this.marginTop + _cellOffsetY;

			this._printCellWithContent(_text, _cellOffsetX, _cellOffsetY);
		});
	}

	_printCellWithContent(_text, _cellOffsetX, _cellOffsetY) {
		this.doc
			.rect(_cellOffsetX, _cellOffsetY, this.cellWidth, this.cellHeight)
			.stroke();

		this.doc
			.fontSize(this.contentFontSize);

		_cellOffsetY = _cellOffsetY + this.cellHeight - this.contentFontSize;

		this.doc
			.text(PdfDocument._normalizeText(_text), _cellOffsetX, _cellOffsetY, { 
				width: this.cellWidth, 
				align: 'center'
			});
	}

	_writeFile() {
		this.doc.pipe(fs.createWriteStream(this.config.output));
		this.doc.end();
	}
}

module.exports = PdfDocument;