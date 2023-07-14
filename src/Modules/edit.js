function enableEdit(spanElement, dataArray, index) {
  spanElement.addEventListener('dblclick', function () {
    spanElement.contentEditable = true;
    spanElement.focus();
  });

  spanElement.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      spanElement.blur();
    }
  });

  spanElement.addEventListener('blur', function () {
    const updatedData = spanElement.textContent.trim();
    dataArray[index].description = updatedData;
    save(dataArray);
    spanElement.contentEditable = false;
  });
}
const spanElement = document.querySelector('.txt');
const index = /* index of the corresponding item in the list array */;
enableEdit(spanElement, list, index);
