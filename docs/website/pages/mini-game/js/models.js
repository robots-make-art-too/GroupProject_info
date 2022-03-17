var characters = [],
    tools = [];

function ARModel(name, dialogue) {
    this.name = name;
    this.dialogue = dialogue;

}

ARModel.prototype.speak = function() {
    return this.dialogue;   
}


//Character model
function Character(name, dialogue, tool, successDialogue) {
    ARModel.call(this, name, dialogue);
    this.tool = tool;
    this.successDialogue = successDialogue;
}
Character.prototype = Object.create(ARModel.prototype);


//Tool model
function Tool(name, dialogue) {
    ARModel.call(this, name, dialogue);
}
Tool.prototype = Object.create(ARModel.prototype);


function initiateModels() {
    var charactersArray = [
      {
        name: 'pyra',
        dialogue: 'Hi there, I\'m Pyra! I\'ve lost my hammer. Let me know if you see it!',
        tool: new Tool('hammer', 'You have found Pyra\'s hammer!'),
        successDialogue: 'Thanks for my hammer!'
      },
      {
        name: 'demo',
        dialogue: 'Building Interactive Systems!',
      }
    ];

    charactersArray.forEach(function(character){
        characters.push(new Character(character.name, character.dialogue, character.tool, character.successDialogue));
        if (character.tool) tools.push(character.tool);
    });

    console.log('characters', characters);
    console.log('tools', tools)
}

initiateModels();
