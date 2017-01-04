'use strict';

const PdfDocumet = require('./parentClasses/PdfDocument');
const _ = require('lodash');

const DEFAULT_CONFIG = {
	doc: {
		numOfPages: 1
	},
	page: {
		init: {
			layout: 'landscape',
			margins: {
				top: 0,
				bottom: 0,
				left: 0,
				right: 0
			}
		},
		width: 790,
		height: 610
	},
	content: {
		columns: 5,
		width: 700,
		height: 550,
		maxCellHeight: 20,
		maxFontSize: 16
	},
	header: {
		fontSize: 20,
		texts: [
			'1035 Budapest, Miklós u. 13. VIII/42.'
		]
	},
	output: './dev/smallTable.pdf'
};

class SmallTable extends PdfDocumet {
	constructor(_config){
		super();
		this.config = _.defaultsDeep({}, _config, DEFAULT_CONFIG);
	}

	_setMarginDimensions(){
		this.marginLeft = Math.round(this.config.page.width - this.config.content.width) / 2;
		this.marginTop = 5;
	}

	_setTableCellDimensions(_numOfRows) {
		this.cellWidth = Math.ceil(this.config.content.width / this.config.content.columns);
		this.cellHeight = Math.ceil(this.config.content.height / _numOfRows);
		this.cellHeight = this.cellHeight > this.config.content.maxCellHeight ? this.config.content.maxCellHeight : this.cellHeight;
	}

	_setContentFontSize() {
		this.contentFontSize = this.cellHeight - 4;
		this.contentFontSize = this.contentFontSize > this.config.content.maxFontSize ? this.config.content.maxFontSize : this.contentFontSize;
	}

	_setDocumentDimensions(_companies) {
		let _numOfTotalColumns = this.config.doc.numOfPages * this.config.content.columns;
		let _numOfRows = Math.ceil(_companies.length / _numOfTotalColumns);

		this._setMarginDimensions();
		this._setTableCellDimensions(_numOfRows);
		this._setContentFontSize();
	}

	_printPage(_pageNumber, _companies) {
		this.doc.addPage(this.config.page.init);

		this._printTableWithCellsAndContents(_companies);
	}

	create(_companies) {

		this._setDocumentDimensions(_companies);

		const _companiesSplitForPages = SmallTable._splitArrayIntoEqualBlocks(_companies, this.config.doc.numOfPages);

		for(let _i = 0, _iMax = _companiesSplitForPages.length; _i < _iMax; _i++) {
			this._printPage(_i, _companiesSplitForPages[_i]);
		}

		this._writeFile();
	}

}

module.exports = SmallTable;