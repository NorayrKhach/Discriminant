        const a =1;
        const b =6;
        const c =2;
  console.log(a+'x^2'+'+'+b+'x'+'+'+c+'=0');
  console.log('Solution');
  console.log('Discrimnant is');
  if(a === 0){
  console.log('Give the const a less than 1')
  }else{
        console.log('D=b^2-4ac');
        const Discriminat = b*b - 4*a*c;
  console.log(Discriminat);          
  if(Discriminat === 0){
  console.log('This have a root');
    const singleRoot = -1*b/2*a;
    console.log('The root is'+''+ singleRoot);  
  }else if(Discriminat < 1){
  console.log('This is empty')
  }else if(Discriminat >=1){
    console.log('The value of x(1,2)=( -1*b+/-Root of Discriminat(D))/2*a')
    const firstRoot = (-1*b+Math.sqrt(Discriminat))/2*a;
    const secondRoot = (-1*b-Math.sqrt(Discriminat))/2*a;
    console.log('==========================================')
    console.log(firstRoot+' and '+secondRoot);
   }
  }
