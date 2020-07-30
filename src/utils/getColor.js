export default function getColor(num) {

    if( num >= 0 && num <= 2 ) return 'gray';
    if( num >= 3 && num <= 6 ) return 'blue';
    if( num >= 7 && num <= 10 ) return 'green';
    if( num >= 11 ) return 'red';

}