angular.module("translateModule", [])
    .controller("translateCtrl", function ($scope) {
//-------------------------------------------------------------------------
        //===ПЕРЕМЕННЫЕ====//
        //console.log(' = '+);

        //массив со словами
        $scope.Words = [
            {en:"accept",tr:"əkˈsept",ru:"принимать, брать"},
            {en:"capable",tr:"ˈkeɪpəbl",ru:"способен, дееспособный"},
            {en:"entity",tr:"ˈentɪtɪ",ru:"сущность, объект"}
        ];
        /**
         * режим отображения
         * @value en-ru, en, ru
         * @type {string}
         */
        $scope.mode = "en-ru";
        //счетчик для перехода по словам вперед/назад
        $scope.step = 0;
        //min и max значения step
        $scope.min_step = 0;
        $scope.max_step = $scope.Words.length;
        console.log('Слов в словаре - '+  $scope.max_step);



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
            $scope.changeMode($scope.mode);
            $scope.en.text = $scope.Words[$scope.step].en;
            $scope.tr.text = $scope.Words[$scope.step].tr;
            $scope.ru.text = $scope.Words[$scope.step].ru;
            //зацикливаем прокрутку слов
            if($scope.step < $scope.max_step -1)
            {
                $scope.step++;
            }
            else
            {
                $scope.step = $scope.min_step;
            }
        }


//-------------------------------------------------------------------------
        //ПОКАЗАТЬ ПРЕДЫДУЩЕЕ СЛОВО
        $scope.prevWord = function(e) {
            $scope.changeMode($scope.mode);
            $scope.en.text = $scope.Words[$scope.step].en;
            $scope.tr.text = $scope.Words[$scope.step].tr;
            $scope.ru.text = $scope.Words[$scope.step].ru;
            //зацикливаем прокрутку слов
            if($scope.step == $scope.min_step)
            {
                $scope.step = $scope.max_step - 1;
            }
            else
            {
                $scope.step--;
            }
        }

//-------------------------------------------------------------------------
        //RESET - в начальное состояние
        $scope.Reset = function(e) {

        }

    });//translateCtrl