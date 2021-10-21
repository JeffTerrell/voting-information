$(document).ready(function() {
  $("#ageverification").submit(function(event) {
    event.preventDefault();
    const dobInput = $("input#dateofbirth").val();
    const dobAsMs = Date.parse(dobInput);
    const eighteenYearsAgo = Date.now() - 568024668000;

    if (dobAsMs <= eighteenYearsAgo) {
      $('#outputtrue').show();
    } else {
      $('#outputfalse').show();
    }
    
  });
});



