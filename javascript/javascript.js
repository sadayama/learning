class Test{

};



window.addEventListener('load',
function(){
//javascript間の連携
let text;
const text_export=document.getElementById("export");
text_export.onclick =function(){
  text=[
    "<p>export default クラス名;</p>",
  ].join('');
      document.getElementById("program").innerHTML=text;

  text=[
    "<p>他のファイルでも指定したクラスを使えるようにする</p>",
  ].join('');
      document.getElementById("manual").innerHTML=text;

}

const text_import=document.getElementById("import");
text_import.onclick =function(){
  text=[
    "<p>import クラス名 from './ファイル名';</p>",
  ].join('');
      document.getElementById("program").innerHTML=text;

  text=[
    "<p>他のファイルに定義されているクラスを使用できるようにする。</p>",
  ].join('');
      document.getElementById("manual").innerHTML=text;

}

const text_succession=document.getElementById("succession");
text_succession.onclick =function(){
  text=[
    "<p>class 子クラス extends 親クラス名{}</p>",
  ].join('');
      document.getElementById("program").innerHTML=text;

  text=[
    "<p>親クラスの機能を引き継いだ子クラスを作成する。</p>",
  ].join('');
      document.getElementById("manual").innerHTML=text;

  text=[
    "<p>import Animal from './animal.js';",
    "<br>class Dog extends Animal{};</p>",
    "<p>親クラスAnimalの機能を持った子クラスDogが作成された</p>"
  ].join('');
  document.getElementById("manual").innerHTML=text;

}

const text_override=document.getElementById("override");
text_override.onclick =function(){
  text=[
    "<p>同じメソッドが親クラスと子クラスにある場合、",
    "<br>子クラスが優先される</p>",
  ].join('');
      document.getElementById("program").innerHTML=text;


  text=[
    "<p>class 子クラス extends 親クラス{",
    "<br>constructor(){",
    "<br>super()",
    "<br>子クラスのコンストラクタ処理",
    "<br>}",
    "<br>}",
    "<p>親クラスに同名のメソッドやコンストラクタがあっても",
    "<br>子クラスのメソッドが優先して実行される",
  ].join('');
  document.getElementById("manual").innerHTML=text;

}

const text_super=document.getElementById("super");
text_super.onclick =function(){
text=[
  "<p>super(親クラスからオーバーライドするコンストラクタに渡す引数)</p>",
].join('');
document.getElementById("program").innerHTML=text;

text=[
  "<p>親クラスのコンストラクタをオーバーライドしたい場合",
  "<br>super()を用いる。",
  "<br>親クラスのコンストラクタが引数を受け取る場合、",
  "<br>super()の()に引数を渡す</p>",
].join('');
document.getElementById("manual").innerHTML=text;

text=[
  "<p>親クラス",
  "<br>class Animal{",
  "<br>constructor(name,age){",
  "<br>this.name=name;",
  "<br>this.age=age",
  "<br>}",
  "<br>}</p>",
  "<p>子クラス",
  "<br>class Dog extends Animal{",
  "<br> constructor(name,age,breed)",
  "<br>{",
  "<br>super(name,age);",
  "<br>this.breed=breed;",
  "<br>}",
  "<br>}</p>",
  "<p>親クラスからnameとageのコンストラクタを継承しつつ",
  "<br>子クラスで新たにbreedを追加している。</p>",

].join('');
document.getElementById("sample").innerHTML=text;
}
}

,false);
