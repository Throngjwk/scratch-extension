class OperatorExtraExtension {
    getInfo() {
      return {
        id: 'operatorextra', // change this if you make an actual extension!
        name: 'Operator Extra',
        blocks: [
            {
            opcode: 'getterOrEqual',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Getter Or Equal [ONE][TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 7
              },
              TWO: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 12
              }
            }
          },{
            opcode: 'lessOrEqual',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Less Or Equal [ONE][TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 7
              },
              TWO: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 12
              }
            }
          },
        ]
      };
    }
    getterOrEqual(args) {
      // Note strict equality: Inputs must match exactly: in type, case, etc.
      return args.ONE >= args.TWO;
    }
    lessOrEqual(args) {
        // Note strict equality: Inputs must match exactly: in type, case, etc.
        return args.ONE <= args.TWO;
      }
  }
  Scratch.extensions.register(new OperatorExtraExtension());