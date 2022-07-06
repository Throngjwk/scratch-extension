class ThrongjwkExtension {
    getInfo() {
      return {
        id: 'throngjwkxtension', // change this if you make an actual extension!
        name: 'My Number',
        blocks: [
          {
            opcode: 'one',
            blockType: Scratch.BlockType.REPORTER,
            text: 'One',
          },{
            opcode: 'two',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Two',
          },{
            opcode: 'three',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Three',
          },{
            opcode: 'four',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Four',
          },{
            opcode: 'five',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Five',
          },{
            opcode: 'six',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Six',
          },{
            opcode: 'seven',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Seven',
          },{
            opcode: 'eight',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Eight',
          },{
            opcode: 'nine',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Nine',
          },{
            opcode: 'ten',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Ten',
          },{
            opcode: 'hundred',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Hundred',
          },{
            opcode: 'thousand',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Thousand',
          },{
            opcode: 'convert',
            blockType: Scratch.BlockType.REPORTER,
            text: 'From [ONE]',
            arguments: {
                ONE: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 27
                },
            }
          },{
            opcode: 'sqrt',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Square Root [ONE]',
            arguments: {
                ONE: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 36
                },
            }
          },{
            opcode: 'powertwo',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Two Power [ONE]',
            arguments: {
                ONE: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 11
                },
            }
          },{
            opcode: 'logtwo',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Logratim Two [ONE]',
            arguments: {
                ONE: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 2048
                },
            }
          },{
            opcode: 'floor',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Floor [ONE]',
            arguments: {
                ONE: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 89.2
                },
            }
          },{
            opcode: 'tan',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Tan [ONE]',
            arguments: {
                ONE: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 3
                },
            }
          },{
            opcode: 'atan',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Atan [ONE]',
            arguments: {
                ONE: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 4
                },
            }
          },{
            opcode: 'ceil',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Ceil [ONE]',
            arguments: {
                ONE: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 2.2
                },
            }
          },{
            opcode: 'powerfive',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Five Power [ONE]',
            arguments: {
                ONE: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 9
                },
            }
          },
        ]
      };
    }
    one() {
      // Returned of one
      return 1;
    }
    two() {
        // Returned of two
        return 2;
      }
    three() {
        // Returned of three
        return 3;
      }
    four() {
        // Returned of four
        return 4;
      }
    five() {
        // Returned of five
        return 5;
      }
    six() {
        // Returned of six
        return 6;
      }
    seven() {
        // Returned of seven
        return 7;
      }
    eight() {
        // Returned of eight
        return 8;
      }
    nine() {
        // Returned of nine
        return 9;
      }
    ten() {
        // Returned of ten
        return 10;
      }
    hundred() {
        // Returned of one hundred
        return 100;
      }
    thousand() {
        // Returned of one thousand
        return 1000;
      }
    convert(args) {
        // Returned of value
        return args.ONE;
      }
    sqrt(args) {
        // Returned of square root
        return Math.sqrt(args.ONE);
      }
    powertwo(args) {
        // Returned of two of power
        return Math.pow(2, args.ONE);
      }
    logtwo(args) {
        // Returned of base two logarithm number
        return Math.log2(args.ONE);
      }
    floor(args) {
        // Returned of floor value
        return Math.floor(args.ONE);
      }
    tan(args) {
        // Returned of tangent value
        return Math.tan(args.ONE);
      }
    atan(args) {
        // Returned of arctangent value
        return Math.atan(args.ONE);
      }
    ceil(args) {
        // Returned of ceililng value
        return Math.ceil(args.ONE);
      }
    powerfive(args) {
        // Returned of five of power
        return Math.pow(5, args.ONE);
      }
  }
  Scratch.extensions.register(new ThrongjwkExtension());