let questionNumber = 0;
const detailForm = document.getElementById("detailForm");
const modForm = document.getElementById("modForm");
const forForm = document.getElementById("forForm");
const imgBlock = document.getElementById("imgBlock");
const getQuestion = () => {
  imgBlock.innerHTML = "";
  questionNumber = Math.floor(Math.random() * Questions.length);
  imgBlock.innerHTML = '<img src="' + Questions[questionNumber].img + '">';
  const detailOptions = getOptions(Details, [Questions[questionNumber].detail]);
  detailForm.innerHTML = "";
  detailOptions.forEach((el) => {
    detailForm.innerHTML +=
      '<input type="radio" name="detail" id="' +
      el +
      '" />' +
      '<label for="' +
      el +
      '">' +
      el +
      "</label> <br>";
  });

  const modOptions = getOptions(
    Modifications,
    Questions[questionNumber].modifications
  );
  modForm.innerHTML = "";
  modOptions.forEach((el) => {
    modForm.innerHTML +=
      '<input type="checkbox" name="mod" id="' +
      el +
      '" />' +
      '<label for="' +
      el +
      '">' +
      el +
      "</label> <br>";
  });

  const forOptions = getOptions(For, Questions[questionNumber].for);
  forForm.innerHTML = "";
  forOptions.forEach((el) => {
    forForm.innerHTML +=
      '<input type="checkbox" name="for" id="' +
      el +
      '" />' +
      '<label for="' +
      el +
      '">' +
      el +
      "</label> <br>";
  });
};

const getOptions = (array, correctAnswersArray) => {
  let options = [];
  correctAnswersArray.forEach((el) => {
    options.push(array[el]);
  });
  while (options.length < 7) {
    let randomAnswer = Math.floor(Math.random() * array.length);
    if (!options.includes(array[randomAnswer]))
      options.push(array[randomAnswer]);
  }
  return options.sort(() => Math.random() - 0.5);
};

const checkAnswer = () => {
  const detailCurrentOptions = document.getElementsByName("detail");
  const modCurrentOptions = document.getElementsByName("mod");
  const forCurrentOptions = document.getElementsByName("for");

  detailCurrentOptions.forEach((el) => {
    if (el.id === Details[Questions[questionNumber].detail]) {
      if (el.checked) el.setAttribute("class", "correct green");
      else el.setAttribute("class", "correct");
    } else if (el.checked) el.setAttribute("class", "red");
  });

  modCurrentOptions.forEach((el) => {
    const modNames = Questions[questionNumber].modifications.map(
      (number) => Modifications[number]
    );
    if (modNames.includes(el.id)) {
      if (el.checked) el.setAttribute("class", "correct green");
      else el.setAttribute("class", "correct");
    } else if (el.checked) el.setAttribute("class", "red");
  });

  forCurrentOptions.forEach((el) => {
    const forNames = Questions[questionNumber].for.map((number) => For[number]);
    if (forNames.includes(el.id)) {
      if (el.checked) el.setAttribute("class", "correct green");
      else el.setAttribute("class", "correct");
    } else if (el.checked) el.setAttribute("class", "red");
  });
};

getQuestion();
