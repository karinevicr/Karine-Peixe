//configurações do jogo
var config = { 
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
}  

//criando o jogo
var game = new Phaser.Game(config)

var peixinho;

function preload() {
//carregar coisas - pegar caneta
    this.load.image('mar', 'assets/bg_azul-claro.png');

    this.load.image('logo','assets/logo-inteli_azul.png');

    this.load.image('peixe','assets/peixes/peixinho_roxo.png')
}

function create() {
    //criar coisas - desenhar na tela
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);
    peixinho = this.add.image(400, 300, 'peixe');
}

function update() {
    //atualizar coisas - animar o desenho
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}

