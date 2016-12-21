/**
 * Created by TonyJiang on 16/12/21.
 */
import path from 'path';
import Generator from 'yeoman-generator';

module.exports = class extends Generator{



    constructor(args, opts){
        super(args, opts);

        //support for a `--babel` flag
        this.option('babel');

        this._userOptions = {};

        this.sourceRoot(path.resolve(__dirname , '../../templates'));

    }

    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'projectName',
                message: '请输入项目名称, 会被作为项目文件夹的名字'
            }
        ]).then( answers => {
           this._userOptions.projectName = answers.projectName;
        });
    }

    writing(){
        this.fs.copyTpl(
            this.templatePath(),
            this.destinationPath(this._userOptions.projectName)
        );

        //重命名.babelrc
        this.fs.move(
            this.destinationPath(this._userOptions.projectName + '/babelrc'),
            this.destinationPath(this._userOptions.projectName + '/.babelrc')
        );
    }

};



// module.exports = generators.extend({
//
//     prompting: {
//         pluginName: function(){
//             var done = this.async();
//             var prompt = [
//                 {
//                     type: 'input',
//                     name: 'projectName',
//                     message: '请输入项目名称, 会被作为项目文件夹的名字'
//                 }
//             ];
//
//             this.prompt(prompt, function(response){
//                 this.options.projectName = response.projectName;
//                 done();
//             }.bind(this));
//         }
//     },
//
//     writing: {
//         buildDir: function(){
//             var directoryName = this.options.projectName;
//             this.destinationRoot(directoryName);
//         },
//
//         assetsDirs : function(){
//             // this.sourceRoot('./templates');
//             console.log(this.templatePath() , this.destinationPath());
//             this.fs.copyTpl(
//                 this.templatePath(),
//                 this.destinationPath(),
//                 {
//                     pluginName : this.options.pluginName,
//                     pluginClassName : this.options.pluginClassName
//                 }
//             );
//
//             //重命名.babelrc
//             this.fs.move(
//                 this.destinationPath('babelrc'),
//                 this.destinationPath('babelrc')
//             );
//
//         },
//     }
//
// });