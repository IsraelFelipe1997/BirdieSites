//var vaza do bloco {} → perigoso!
// let e const ficam onde foram criados → mais seguro 👍

//var
console.log('Teste com declaracao var:');
{
    var teste = "funciona fora do bloco";
  }

  var teste = "funciona";

  console.log(teste);
  //A variavel teste declarada com var funciona fora do bloco logico e pode causar bugs dificeis de achar
  
  // let
  console.log('Teste com declaracao let:');
  {
    let teste2 = "funciona dentro do bloco";
  }
  
  // ❌ Isso aqui vai dar erro:
  console.log(teste2); // ReferenceError: teste is not defined
  
  // const
  {
    const teste3 = "const também respeita o bloco";
  }
  
  console.log(teste3); // ❌ ReferenceError: teste3 is not defined
  