var Words = [
    {en:"accept",tr:"əkˈsept",ru:"принимать, брать"},
    {en:"capable",tr:"ˈkeɪpəbl",ru:"способен, дееспособный"},
    {en:"entity",tr:"ˈentɪtɪ",ru:"сущность, объект"}
];
var wordsLenght = 0;


//=================================
//=======ФУНКЦИИ===================
//=================================

//показать весь словарь
function showAllWords()
{
    wordsLenght = Words.length;
    for(var i = 0; i < wordsLenght; i++)
    {

    }
}

//добавить новое слово
function addNewWord(en, ru, trans)
{
    var nextItem = Words.length;
    Words[nextItem] = {
        "en": en,
        "trans": trans,
        "ru": ru
    }
}

//поместить элемент в хранилище
function putToStorage(item)
{

}
//перевести
function Translate(word)
{

}
//=================================
//=======ПРОГРАММА=================
//=================================

//=================================
//==========РАЗНОЕ=================
//=================================

$(window).load(function(){
    //alert('my.js');
});


