const SmallTable = require('../index').SmallTable;

const smallTable = new SmallTable();

smallTable.create(["100 SZÁL VIRÁG Kft.",
	"4 ÉP-SZAK 2000 Kft.",
	"Adams and Anderson Kft.",
	"Adóporta Kft.",
	"Alessandro Fashion Kft.",
	"Altrom 2011 Bt.",
	"AR-ING-BAU Kft.",
	"ARGO GASTRO Bt.",
	"ATOLT Kft.",
	"B2B International Hungary Kft.",
	"BARANYAI ZRT",
	"Bau Szent Márk Kft.",
	"Belvárosi Enterieur Kft.",
	"Bernimpex Bt.",
	"Berolaj Produkt Kft.",
	"Berosz Vagyonvédelmi Kft.",
	"BET-LAND Zrt",
	"Bioregnum Hungary Kft.",
	"Bízza Ránk A Feszültséget Kft.",
	"Bota Invest Kft.",
	"BRO Kereskedelmi Kft.",
	"Budapesti út 6. Kft.",
	"BUILD IT Mérnökiroda Kft.",
	"Bükki Miklós Egyéni Cég Kfc.",
	"CALAVITA KFT.",
	"Cedarvirág Bt.",
	"Central Holding Kft.",
	"Centrum Motors Kft.",
	"Chocofarm Kft.",
	"Construmetal Kft.",
	"Consulting Trade Investment Kft.",
	"Control Könyvelő Iroda Kft.",
	"Controll and Quality Kft.",
	"Cordon Investment Kft.",
	"Creator Trade Kft.",
	"Crystal Computer Trade Kft.",
	"Diamond Kft.",
	"Difendersi Kft.",
	"Direct Aviation Kft.",
	"Dorcsen Tax Kft.",
	"DREAMCLASS BAU Kft.",
	"Dunastar-Duó Kft.",
	"EDUCATIOCENTER Kft.",
	"Eladonline Kft.",
	"EMKT Kommunikációs Kft.",
	"Energetikai Kft.",
	"Enjoy Life Kft.",
	"Enyuco Kft.",
	"ePolisher Team",
	"Eu-Drake-Sec Kft.",
	"Euro Lex Trade Kft.",
	"EUROFILA Kft.",
	"EZERDŐ Kft.",
	"Family Sport Kft",
	"FandF Immo Kft.",
	"FILBAU Kft.",
	"Financial Services Zrt.",
	"Fireservice Kft.",
	"Formeeting Kft.",
	"FORTE Hungary Kft.",
	"FOXCOM  MARKETING  KFT",
	"G-MAG Kft.",
	"GA Home Kft.",
	"Gastro Konyha Technik Kft",
	"Gemino Dízel Kft.",
	"GENERON HUNGARY Kft.",
	"Geo Gastro Kft.",
	"Globál Cargo Kft",
	"Globalaprox Bt.",
	"Golden Pinnacle Kft.",
	"Golden Pinnacle Kft.",
	"GROWE TELEKOM Kft.",
	"H+H Klíma Bt.",
	"HAMILÓ 2008 Kft.",
	"HARDWAY Kft.",
	"Harmatpont Bt.",
	"HE-MU-SZI Bt.",
	"Héjja Motor Kft.",
	"HIPOINVEST Kft.",
	"Hobati Húsfeldolgozó Kft.",
	"Homehause Tüzépker Kft.",
	"HORIZONT BUDAPEST Bt.",
	"HRD Company Kft.",
	"Hunakraft Kft.",
	"INDEWERRA Kft.",
	"INSTRUMEX Hungária Kft.",
	"IntellCom Kft",
	"Inter Euro Mobil Kft.",
	"INTER SPED Kft.",
	"Intermobil Trans Kft.",
	"Intim & Sexy Kft.",
	"INTRAM SOFT Kft.",
	"Iron-Metal Kft.",
	"JAB-ÉT Tisza Kft.",
	"JARVIS Kft.",
	"KARL HAAG Kft.",
	"Károlyi Építő Kft.",
	"Kart Média Kft.",
	"KASZI Kft.",
	"King's Caravan Kft.",
	"Klissza Invest Kft.",
	"KOLTAY CONSULTING KFT",
	"KOOPERÁCIÓ 2000 Kft.",
	"KVHD TRANSPORT Kft.",
	"LÉT-REFORM ORIGINAL Kft.",
	"LIANE-CONTROLL 08 KFT.",
	"Lizak Andrea Erika",
	"LOBBIMONITOR Kft.",
	"Long Tyres Hungary Kft.",
	"M.K.A Residence kft",
	"MAFEBA-BAU Kft.",
	"Magnolia Magnet Kft.",
	"Magyar Hőszigetelő Kft.",
	"MAR-TEX TRADE Kft.",
	"Marketing & Advertising Kft.",
	"Marpul-ker Kft.",
	"Maximal-Truck Kft.",
	"Maxintrans-RU Kft.",
	"Maxipool Bt.",
	"Medilight Tech Kft.",
	"Mega Favorit Kft.",
	"Mehr Zaker Kft.",
	"MERENDERA Kft. v.a.",
	"METODIKA Kft.",
	"MH Group  Kft.",
	"MIKRO-CIPŐ 2013 Kft",
	"Mithrill Trade Kft.",
	"MPTSZ Egyesület",
	"NAN TANORI Kft.",
	"Nauti Soft Kft.",
	"NETUNION Kft.",
	"New Life Laundry Kft.",
	"New Tampa Trade Kft.",
	"NFS Technology Kft.",
	"NORDMENTOR Kft.",
	"NORMATOOL TRADE Kft",
	"Omega-Zolas Kft.",
	"Omnitrend Zrt.",
	"Origó Magyarország Kft.",
	"Orto-Kötszer Kft.",
	"OXNARD Kft.",
	"ÖKOM Bt.",
	"P-EARL Programszervező Kft",
	"P-Szilex Kft.",
	"PABAKU Kft.",
	"Parallax Kft",
	"Petro Zaker Kft.",
	"Piramis Invest Global Kft.",
	"PLATINUM GL Kft.",
	"Pokornyikné Barna Erzsébet",
	"PonderoCont Kft",
	"PONTDEBRECEN Kft.",
	"PRINT VOLUME Kft.",
	"PRIVÁT OFFICE Kft.",
	"Protetik-Med Kft.",
	"Puskás Anita ev.",
	"Qualarteam Bt.",
	"Quality Agnus Kft.",
	"RÁCZT Mélyép-Bau Kft.",
	"Rail-Tech Kft.",
	"Regia - Tex Kft.",
	"REMIX Solution Kft",
	"Rent Building Kft.",
	"Rivert Hungary Kft.",
	"RLC-H Nonprofit Kft",
	"RZL Artus Kft",
	"SEDOTTO HUNGARY Kft.",
	"SEVEN BRIDGE Kft.",
	"SH Architects Kft.",
	"SIGNET COMPANY Kft.",
	"Siltex Kft.",
	"Silver Field Kft.",
	"Sophiem Kft.",
	"SSDR Company Kft.",
	"Stallum Book Kft.",
	"STINAS Kft.",
	"Stratford System Kft.",
	"Strong-Work-Job Kft.",
	"STTP Kft",
	"SUNOR BAU Kft.",
	"SWEET-KER Depot Kft.",
	"Szécsény-Mill Kft.",
	"Szirma-Kont Kft.",
	"Szuhavölgye Kft.",
	"Telekom Internet Kft",
	"TEO Investments Kft.",
	"TERV-FORMA-HITEL Kft.",
	"Thermo Metál Centrum Kft.",
	"Tofalvi 2000 Bt.",
	"TREMONAX Kft.",
	"TRIPLAPAPÍR Kft.",
	"TT FÉMTECHNIKA Kft.",
	"Tudakozó.hu Hungary Kft.",
	"Tusori Kft.",
	"UPR-MÉDIA Kft.",
	"V-Market Kft.",
	"V-RENT CONSULTING Kft.",
	"V-RENT MANAGEMENT Kft.",
	"VÁL-ING Kft.",
	"VAZO MEAT KFT",
	"VINDIA s.r.o. Kft.",
	"Vinor Control Kft.",
	"VIRÁGH TESTVÉREK Kft.",
	"Vivacone Developement Kft",
	"Waldblue Kft.",
	"WE-GA 54 Kft.",
	"WEINGE BÚTOR Kft.",
	"Winner Online Kft.",
	"Wood-Vill-Pro Kft.",
	"Woodsman-Lumberjack Kft.",
	"WOODWELT Kft.",
	"World Top Sport Bt.",
	"World Top Sport Bt.",
	"WPT Bt.",
	"ZEA CONSULTING Kft.",
	"Zeller és Zeller Kft.",
	"Zol-Csi Ínyenc Kft.",
	"Zsólyomi Expressz Kft."
]);