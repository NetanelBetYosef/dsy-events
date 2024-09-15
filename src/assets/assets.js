import mearhim from "./1633.jpg";
import cricim from "./1641.jpg";
import salatim from "./1462.jpg";
import pastot from "./1487.jpg";
import maafim from "./1807.jpg";
import kinuhim from "./1525.jpg";
import shtia from "./1729.jpg";
// END MENU LIST
// START MEARHIM MENU
import salamon from './1401.jpg'
import fetamelafefon from './995.jpg'
import pitriot from './1145.jpg'
import karpachioselek from './1244.jpg'
import platatyerakot from './1172.jpg'
import magashtortiyot from './1714.jpg'
import magashantipasti from './1260.jpg'
import pizza from './1878.jpg'
import fukazaantipazti from './1049.jpg'
import magashkish from './0001.jpeg'
// START CRICIM MENU
import magashminibagel from './1640.jpg'
import karihkorason from './1709.jpg'
import antipasti from './1308.jpg'
import avukado from './1577.jpg'
// START SALATIM MENU
import ishiyotsalatim from './1144.jpg'
import salatanak from './1462.jpg'
import salatbriut from './1441.jpg'
import salatnisoaz from './1543.jpg'
import salatkatom from './1469.jpg'
import salatkruvasiati from './1476.jpg'
import salatburgul from './906.jpg'
// START PASTOT MENU
import elaulyo from './1292.jpg'
import tapuahadama from './1349.jpg'
import napolitana from './1489.jpg'
// START KINUHIM MENU
import magashperot from './1586.jpg'
import magashkinuhimishim from './1525.jpg'
import shmarimgvina from './1497.jpg'
import shmarimshokolad from './1505.jpg'
import kranchshokolad from './1521.jpg'
import kinuhimishim from './1537.jpg'
// START SHTIA MENU
import shtiaitem from './1737.jpg'
import mitzsahut from './mitzsahut.jpeg'
import cola from './cola.jpg'
import nezti from './nestihezi.jpeg'

export const menu_list = [
  {
    menu_name: "שתיה",
    menu_image: shtia,
  },
  {
    menu_name: "קינוחים",
    menu_image: kinuhim,
  },
  {
    menu_name: "מאפים",
    menu_image: maafim,
  },
  {
    menu_name: "פסטות",
    menu_image: pastot,
  },
  {
    menu_name: "סלטים",
    menu_image: salatim,
  },
  {
    menu_name: "כריכים",
    menu_image: cricim,
  },
  {
    menu_name: "מארחים בסטייל",
    menu_image: mearhim,
  },
];

export const food_list = [
    {
        _id: '1',
        name: 'ברוסקטה סלמון',
        image: salamon,
        price: 140,
        description: `סלמון`,
        category: 'מארחים בסטייל',
    },
    {
        _id: '2',
        name: 'ברוסקטה פטה מלפפון',
        image: fetamelafefon,
        price: 140,
        description: `פטה מלפפון`,
        category: 'מארחים בסטייל',
    },
    {
        _id: '3',
        name: 'ברוסקטה פטריות',
        image: pitriot,
        price: 140,
        description: `פטריות`,
        category: 'מארחים בסטייל',
    },
    {
        _id: '4',
        name: 'קרפציו סלק מגש אירוח',
        image: karpachioselek,
        price: 130,
        description: 'קוטר 33',
        category: 'מארחים בסטייל',
    },
    {
        _id: '5',
        name: 'קרפציו סלק מגש אירוח',
        image: karpachioselek,
        price: 160,
        description: 'קוטר 36',
        category: 'מארחים בסטייל',
    },
    {
        _id: '6',
        name: 'פלטת ירקות',
        image: platatyerakot,
        price: 110,
        description: 'קוטר 33',
        extra: 'רוטב לבחירה : ויניגרט הדרים - רוטב שום - אלף האיים - פסטו - טחינה',
        category: 'מארחים בסטייל',
    },
    {
        _id: '7',
        name: 'פלטת ירקות',
        image: platatyerakot,
        price: 140,
        description: 'קוטר 36',
        extra: 'רוטב לבחירה : ויניגרט הדרים - רוטב שום - אלף האיים - פסטו - טחינה',
        category: 'מארחים בסטייל',
    },
    {
        _id: '8',
        name: 'מגש טורטיות',
        image: magashtortiyot,
        price: 160,
        description: '24 יחידות מיקס',
        extra: 'חביתה - טונה - יווני - אבוקדו - סביח - אנטיפסטי',
        category: 'מארחים בסטייל',
    },
    {
        _id: '9',
        name: 'מגש אנטיפסטי',
        image: magashantipasti,
        price: 130,
        description: '5 סוגי ירקות קלויים בתנור',
        category: 'מארחים בסטייל',
    },
    {
        _id: '10',
        name: 'מגש אירוח קיש',
        image: magashkish,
        price: 150,
        description: 'פטריות \ בטטה',
        category: 'מארחים בסטייל',
    },
    {
        _id: '11',
        name: 'פיצה מרגריטה',
        image: pizza,
        price: 35,
        description: 'תוספת אחת לבחירה',
        category: 'מארחים בסטייל',
    },
    {
        _id: '12',
        name: 'פוקצה אנטיפסטי',
        image: fukazaantipazti,
        price: 35,
        description: 'שמן זית וזעתר, ירקות אנטיפסטי, בולגרית ופטרוזיליה טריה - ניתן לבקש פרווה',
        category: 'מארחים בסטייל',
    },
    {
        _id: '13',
        name: 'מגש מיני בייגל',
        image: magashminibagel,
        price: 140,
        description: '10 יח',
        extra: 'חביתה \ טונה \ יווני \ סביח \ אבוקדו',
        category: 'כריכים',
    },
    {
        _id: '14',
        name: 'מגש פרצל אנטיפסטי',
        image: antipasti,
        price: 140,
        description: '10 יח',
        extra: 'פסטו, בולגרית, ירקות קלויים',
        category: 'כריכים',
    },
    {
        _id: '15',
        name: 'מגש פרצל אבוקדו',
        image: avukado,
        price: 140,
        description: '10 יח',
        extra: 'אבוקדו, ביצה קשה, עגבניה, בצל סגול',
        category: 'כריכים',
    },
    {
        _id: '16',
        name: 'כריך קוראסון',
        image: karihkorason,
        price: 140,
        description: '12 יח',
        extra: 'חביתה \ סלמון \ צהובה \ בולגרית - עד 2 סוגים למגש',
        category: 'כריכים',
    },
    {
        _id: '55',
        name: 'אישיות - סלט פסטה קר',
        image: ishiyotsalatim,
        price: 160,
        description: '24 יח',
        extra: 'ניתן לשלב עד 2 סוגים במגש',
        category: 'סלטים',
    },
    {
        _id: '56',
        name: 'אישיות - סלט יווני',
        image: ishiyotsalatim,
        price: 160,
        description: '24 יח',
        extra: 'ניתן לשלב עד 2 סוגים במגש',
        category: 'סלטים',
    },
    {
        _id: '57',
        name: 'אישיות - סלט בריאות',
        image: ishiyotsalatim,
        price: 160,
        description: '24 יח',
        extra: 'ניתן לשלב עד 2 סוגים במגש',
        category: 'סלטים',
    },
    {
        _id: '58',
        name: 'אישיות - סלט בורגול',
        image: ishiyotsalatim,
        price: 160,
        description: '24 יח',
        extra: 'ניתן לשלב עד 2 סוגים במגש',
        category: 'סלטים',
    },
    {
        _id: '59',
        name: 'סלט ענק - בורגול',
        image: salatburgul,
        price: 160,
        description: '4 ליטר',
        extra: '3 רטבים לבחירה - ויניגרט הדרים, אלף האיים, רוטב שום, פסטו, טחינה',
        category: 'סלטים',
    },
    {
        _id: '60',
        name: 'סלט ענק - פסטה קר',
        image: salatanak,
        price: 160,
        description: '4 ליטר',
        extra: '3 רטבים לבחירה - ויניגרט הדרים, אלף האיים, רוטב שום, פסטו, טחינה',
        category: 'סלטים',
    },
    {
        _id: '61',
        name: 'סלט ענק - ניסואז',
        image: salatnisoaz,
        price: 160,
        description: '4 ליטר',
        extra: '3 רטבים לבחירה - ויניגרט הדרים, אלף האיים, רוטב שום, פסטו, טחינה',
        category: 'סלטים',
    },
    {
        _id: '62',
        name: 'סלט ענק - יווני',
        image: salatanak,
        price: 160,
        description: '4 ליטר',
        extra: '3 רטבים לבחירה - ויניגרט הדרים, אלף האיים, רוטב שום, פסטו, טחינה',
        category: 'סלטים',
    },
    {
        _id: '63',
        name: 'סלט ענק - בריאות',
        image: salatbriut,
        price: 160,
        description: '4 ליטר',
        extra: '3 רטבים לבחירה - ויניגרט הדרים, אלף האיים, רוטב שום, פסטו, טחינה',
        category: 'סלטים',
    },
    {
        _id: '64',
        name: 'סלט ענק - כתום',
        image: salatkatom,
        price: 160,
        description: '4 ליטר',
        extra: '3 רטבים לבחירה - ויניגרט הדרים, אלף האיים, רוטב שום, פסטו, טחינה',
        category: 'סלטים',
    },
    {
        _id: '65',
        name: 'סלט ענק - כרוב אסיאתי',
        image: salatkruvasiati,
        price: 160,
        description: '4 ליטר',
        extra: '3 רטבים לבחירה - ויניגרט הדרים, אלף האיים, רוטב שום, פסטו, טחינה',
        category: 'סלטים',
    },
    {
        _id: '19',
        name: 'סלט בינוני - בורגול',
        image: salatburgul,
        price: 120,
        description: '2.5 ליטר',
        extra: '2 רטבים לבחירה - ויניגרט הדרים, אלף האיים, רוטב שום, פסטו, טחינה',
        category: 'סלטים',
    },
    {
        _id: '20',
        name: 'סלט בינוני - פסטה קר',
        image: salatanak,
        price: 120,
        description: '2.5 ליטר',
        extra: '2 רטבים לבחירה - ויניגרט הדרים, אלף האיים, רוטב שום, פסטו, טחינה',
        category: 'סלטים',
    },
    {
        _id: '21',
        name: 'סלט בינוני - ניסואז ',
        image: salatnisoaz,
        price: 120,
        description: '2.5 ליטר',
        extra: '2 רטבים לבחירה - ויניגרט הדרים, אלף האיים, רוטב שום, פסטו, טחינה',
        category: 'סלטים',
    },
    {
        _id: '22',
        name: 'סלט ענק - יווני',
        image: salatanak,
        price: 160,
        description: '4 ליטר',
        extra: '3 רטבים לבחירה - ויניגרט הדרים, אלף האיים, רוטב שום, פסטו, טחינה',
        category: 'סלטים',
    },
    {
        _id: '23',
        name: 'סלט ענק - בריאות',
        image: salatbriut,
        price: 160,
        description: '4 ליטר',
        extra: '3 רטבים לבחירה - ויניגרט הדרים, אלף האיים, רוטב שום, פסטו, טחינה',
        category: 'סלטים',
    },
    {
        _id: '24',
        name: 'סלט ענק - כתום',
        image: salatkatom,
        price: 160,
        description: '4 ליטר',
        extra: '3 רטבים לבחירה - ויניגרט הדרים, אלף האיים, רוטב שום, פסטו, טחינה',
        category: 'סלטים',
    },
    {
        _id: '25',
        name: 'סלט ענק - כרוב אסיאתי',
        image: salatkruvasiati,
        price: 160,
        description: '4 ליטר',
        extra: '3 רטבים לבחירה - ויניגרט הדרים, אלף האיים, רוטב שום, פסטו, טחינה',
        category: 'סלטים',
    },
    {
        _id: '27',
        name: 'נפוליטנה',
        image: napolitana,
        price: 170,
        description: 'רוטב עגבניות קלאסי',
        category: 'פסטות',
    },
    {
        _id: '28',
        name: 'אלה אוליו',
        image: elaulyo,
        price: 170,
        description: 'פסטו שום שמן זית בולגרית ואגוזים',
        category: 'פסטות',
    },
    {
        _id: '29',
        name: 'אלפרדו',
        image: null,
        price: 170,
        description: 'שמנת פטריות',
        category: 'פסטות',
    },
    {
        _id: '30',
        name: 'סלסה רוזה',
        image: null,
        price: 170,
        description: 'שמנת, עגבניות ופסטו',
        category: 'פסטות',
    },
    {
        _id: '31',
        name: 'תפוח אדמה ובטטה',
        image: tapuahadama,
        price: 170,
        description: 'מוקרם ברוטב שמנת',
        category: 'פסטות',
    },
    {
        _id: '32',
        name: 'מתוק פרווה',
        image: maafim,
        price: 140,
        description: '2 ק"ג במגש',
        category: 'מאפים',
    },
    {
        _id: '33',
        name: 'מתוק חלבי',
        image: maafim,
        price: 140,
        description: '2 ק"ג במגש',
        category: 'מאפים',
    },
    {
        _id: '34',
        name: 'מתוק מיקס - פרווה וחלבי יחד',
        image: maafim,
        price: 140,
        description: '2 ק"ג במגש',
        category: 'מאפים',
    },
    {
        _id: '35',
        name: 'מלוח פרווה',
        image: maafim,
        price: 140,
        description: '2 ק"ג במגש',
        category: 'מאפים',
    },
    {
        _id: '36',
        name: 'מלוח חלבי',
        image: maafim,
        price: 140,
        description: '2 ק"ג במגש',
        category: 'מאפים',
    },
    {
        _id: '37',
        name: 'מלוח מיקס - פרווה וחלבי יחד',
        image: maafim,
        price: 140,
        description: '2 ק"ג במגש',
        category: 'מאפים',
    },
    {
        _id: '38',
        name: 'מגש פירות',
        image: magashperot,
        price: 160,
        description: 'קוטר 33',
        category: 'קינוחים',
    },
    {
        _id: '39',
        name: 'מגש פירות',
        image: magashperot,
        price: 250,
        description: 'קוטר 33 פרימיום',
        category: 'קינוחים',
    },
    {
        _id: '40',
        name: 'מגש פירות',
        image: magashperot,
        price: 300,
        description: 'קוטר 36 פרימיום',
        category: 'קינוחים',
    },
    {
        _id: '41',
        name: 'מגש אירוח עוגיות',
        image: null,
        price: 160,
        description: '5 סוגי עוגיות',
        category: 'קינוחים',
    },
    {
        _id: '42',
        name: 'מגש קינוחים אישיים',
        image: magashkinuhimishim,
        price: 160,
        description: '24 יח',
        extra: 'ניתן לבחור עד 4 סוגים במגש',
        category: 'קינוחים',
    },
    {
        _id: '43',
        name: 'שמרים גבינה',
        image: shmarimgvina,
        price: 29,
        description: 'המחיר ליחידה',
        category: 'קינוחים',
    },
    {
        _id: '44',
        name: 'שמרים שוקולד',
        image: shmarimshokolad,
        price: 29,
        description: 'המחיר ליחידה',
        category: 'קינוחים',
    },
    {
        _id: '45',
        name: 'קראנץ שוקולד \ קינמון',
        image: kranchshokolad,
        price: 29,
        description: 'המחיר ליחידה',
        category: 'קינוחים',
    },
    {
        _id: '46',
        name: 'קינוחים אישיים',
        image: kinuhimishim,
        price: 27,
        description: 'מבצע! קנה 8 קבל 1 במתנה',
        category: 'קינוחים',
    },
    {
        _id: '47',
        name: 'קופסאת עוגיות',
        image: null,
        price: 32,
        description: 'מבצע! קנה 5 קבל 1 מתנה',
        category: 'קינוחים',
    },
    {
        _id: '48',
        name: 'מיץ סחוט טבעי 330 מל',
        image: mitzsahut,
        price: 15,
        description: 'גזר \ תפוזים',
        category: 'שתיה',
    },
    {
        _id: '49',
        name: 'מיץ סחוט טבעי 500 מל',
        image: mitzsahut,
        price: 18,
        description: 'גזר \ תפוזים',
        category: 'שתיה',
    },
    {
        _id: '50',
        name: 'שייק פירות',
        image: shtiaitem,
        price: 15,
        description: '330 מ"ל',
        category: 'שתיה',
    },
    {
        _id: '51',
        name: 'שייק פירות',
        image: shtiaitem,
        price: 18,
        description: '500 מ"ל',
        category: 'שתיה',
    },
    {
        _id: '52',
        name: 'שתיה קלה פחית',
        image: shtia,
        price: 8,
        description: 'משתנה בהתאם למבחר בחנות',
        category: 'שתיה',
    },
    {
        _id: '53',
        name: 'שתיה קלה חצי ליטר',
        image: nezti,
        price: 10,
        description: 'משתנה בהתאם למבחר בחנות',
        category: 'שתיה',
    },
    {
        _id: '54',
        name: 'שתיה קלה ליטר וחצי',
        image: cola,
        price: 12,
        description: 'משתנה בהתאם למבחר בחנות',
        category: 'שתיה',
    },
];
