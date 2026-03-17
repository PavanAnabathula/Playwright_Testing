let score = 92
switch (true) {

  case (score >= 95):
    console.log('Outstanding — Top performer');
    break;

  case (score >= 85):
    console.log('Excellent — Above expectations')
    break

  case (score >= 70):
    console.log('Good — Meets expectations');
    break;

  case (score >= 50):
    console.log('Needs Improvement');
    break;
  default:
    console.log('Unsatisfactory — Requires training');
}
