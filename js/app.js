angular.module("translateModule", [])
    .controller("translateCtrl", function ($scope) {
//-------------------------------------------------------------------------
        //ПЕРЕМЕННЫЕ
        $scope.Words = [
            {en:"accept",tr:"əkˈsept",ru:"принимать, брать"},
            {en:"capable",tr:"ˈkeɪpəbl",ru:"способен, дееспособный"},
            {en:"entity",tr:"ˈentɪtɪ",ru:"сущность, объект"}
        ];

        /**
         * @value en-ru, en, ru
         * @type {string}
         */
        $scope.mode = "en-ru";

//-------------------------------------------------------------------------
        $scope.changeMode = function(mode){
            switch (mode){
                case ("en-ru"):
                    $scope.en.show = true;
                    $scope.ru.show = true;
                    break;

                case ("en"):
                    $scope.en.show = true;
                    $scope.ru.show = false;
                    break;

                case ("ru"):
                    $scope.en.show = false;
                    $scope.ru.show = true;
                    break;
                default:
                    alert('Режим неопределен');
            }

        }
//-------------------------------------------------------------------------
        //ВЫВОД ЗНАЧЕНИЙ СЛОВ
        $scope.en = {text:'English',show:true};
        $scope.tr = {text:'transcription',show:true};
        $scope.ru = {text:'Russian',show:true};
//-------------------------------------------------------------------------
        //ПЕРЕКЛЮЧЕНИЕ РЕЖИМОВ
        $scope.enRu = function(e){
            $scope.changeMode('en-ru');
            $scope.mode = "en-ru";
        };

        $scope.En = function(e){
            $scope.changeMode('en');
            $scope.mode = "en";
        };

        $scope.Ru = function(e){
            $scope.changeMode('ru');
            $scope.mode = "ru";
        };
        //тест
        //$('input').click(function(){
        //    console.log("en.show = "+ $scope.en.show+"; "+
        //                "ru.show = " +$scope.ru.show+"; ");
        //});
//-------------------------------------------------------------------------
        //ПОКАЗАТЬ НЕДОСТАЮЩУЮ ЧАСТЬ СЛОВА
        /**
         * режим при этом не меняем
         * чтоб при включении след.слова
         * режим остался прежним
         * @param e
         * @constructor
         */
        $scope.Hint = function(e) {
            $scope.changeMode('en-ru');
            console.log("mode = "+ $scope.mode);
        }

//-------------------------------------------------------------------------
        //ПОКАЗАТЬ СЛЕДУЮЩЕЕ СЛОВО
        /**
         * после подсказки
         * восстановить режим!!!
         */
        $scope.nextWord = function(e) {

        }


//-------------------------------------------------------------------------
        //ПОКАЗАТЬ ПРЕДЫДУЩЕЕ СЛОВО
        $scope.prevWord = function(e) {

        }

    });//translateCtrl