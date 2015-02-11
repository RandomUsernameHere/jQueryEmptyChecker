function isEmpty($element){
    /*нужна проверка текста элемента без пробелов т.к. иначе проверка обходится введением пробелов */
    var elementValue = $element.val().trim();
    $element.val(elementValue);
    return !elementValue.length;
}