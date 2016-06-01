angular.module("translateModule", [])
    .controller("translateCtrl", function ($scope) {
//-------------------------------------------------------------------------
        //===ПЕРЕМЕННЫЕ====//
        //console.log(' = '+);

        //массив со словами
        $scope.Words = [
            {en:"accept ",tr:"əkˈsept",ru:"принимать, брать"},
            {en:"according ",tr:"əˈkɔːdɪŋ",ru:"в зависимости от"},
            {en:"accomplish ",tr:"əˈkɔmplɪʃ",ru:"выполнять, совершать"},
            {en:"adjust ",tr:"əˈʤʌst",ru:"регулировать"},
            {en:"ambiguous ",tr:"æmˈbɪgjʊəs",ru:"неоднозначно"},
            {en:"ancestor ",tr:"ˈænsɪstə",ru:"предок"},
            {en:"anticipating ",tr:"ænˈtɪsɪpeɪtɪŋ",ru:"опережающий"},
            {en:"apply ",tr:"əˈplaɪ",ru:"применять"},
            {en:"approach ",tr:"əˈprəʊʧ",ru:"подход , метод"},
            {en:"appropriate ",tr:"əˈprəʊprɪɪt",ru:"соответствующий, надлежащий"},
            {en:"arbitrary ",tr:"ˈɑːbɪtrərɪ",ru:"произвольный, случайный"},
            {en:"assets ",tr:"ˈæsets",ru:"средства"},
            {en:"assertion ",tr:"əˈsɜːʃn",ru:"...methods - методы проверки"},
            {en:"assigned ",tr:"əˈsaɪnd",ru:"заданный, назначенный"},
            {en:"asterisk ",tr:"ˈæstərɪsk",ru:"звездочка"},
            {en:"backward-compatible ",tr:"ˈbækwəd-kəmˈpætəbl",ru:"обратно совместимый"},
            {en:"binding ",tr:"ˈbaɪndɪŋ",ru:"обязательный, связующий"},
            {en:"bootstrap ",tr:"ˈbuːtstræp",ru:"начальная загрузка"},
            {en:"bound ",tr:"baʊnd",ru:"связанный"},
            {en:"capable ",tr:"ˈkeɪpəbl",ru:"способен, дееспособный, работоспособный"},
            {en:"capture ",tr:"ˈkæpʧə",ru:"захватывает"},
            {en:"charset ",tr:"kɑːst",ru:"кодировка"},
            {en:"compatibility ",tr:"kəmpætəˈbɪlɪtɪ",ru:"совместимость, сочетаемость"},
            {en:"consistency ",tr:"kənˈsɪstənsɪ",ru:"последовательность"},
            {en:"credential ",tr:"krɪˈdenʃəl",ru:"учетные данные"},
            {en:"customize ",tr:"ˈkʌstəmaɪz",ru:"настройка"},
            {en:"dedicated ",tr:"ˈdedɪkeɪtɪd",ru:"выделенный, назначенный"},
            {en:"default state ",tr:"dɪˈfɔːlt steɪt",ru:"состояние по умолчанию"},
            {en:"dash ",tr:"dæʃ",ru:"тире"},
            {en:"distinguish ",tr:"dɪsˈtɪŋgwɪʃ",ru:"различать, отличать"},
            {en:"embed ",tr:"ɪmˈbed",ru:"встраивать, внедрять"},
            {en:"ensure ",tr:"ɪnˈʃʊə",ru:"обеспечивать, гарантировать"},
            {en:"entity ",tr:"ˈentɪtɪ",ru:"сущность, объект"},
            {en:"external ",tr:"eksˈtɜːnl",ru:"Внешний"},
            {en:"feature ",tr:"ˈfiːʧə",ru:"особенность"},
            {en:"fetch ",tr:"feʧ",ru:"выборка"},
            {en:"frequency ",tr:"ˈfriːkwənsɪ",ru:"частота"},
            {en:"handler - обработчик"},
            {en:"hint ",tr:"hɪnt",ru:"подсказка"},
            {en:"implicitly ",tr:"ɪmˈplɪsɪtlɪ",ru:"неявно(implicitly convert – неявно преобразовывать)"},
            {en:"inconsistent ",tr:"ɪnkənˈsɪstənt",ru:"несовместимый"},
            {en:"indent ",tr:"ˈɪndent",ru:"отступ, абзац(отступ при написании кода)"},
            {en:"inheritor ",tr:"ɪnˈherɪtə",ru:"наследник"},
            {en:"insert ",tr:"ˈɪnsət",ru:"вставка"},
            {en:"instance ",tr:"ˈɪnstəns",ru:"экземпляр(случай, пример)"},
            {en:"interaction ",tr:"ɪntərˈækʃn",ru:"взаимодействие"},
            {en:"invoke ",tr:"ɪnˈvəʊk",ru:"вызвать"},
            {en:"involve ",tr:"ɪnˈvɔlv",ru:"касаться, затрагивать"},
            {en:"issue ",tr:"ˈɪʃuː",ru:"вопрос, проблема"},
            {en:"item ",tr:"ˈaɪtəm",ru:"пункт, элемент"},
            {en:"judgement ",tr:"ˈʤʌʤmənt",ru:"решение"},
            {en:"layout ",tr:"ˈleɪaʊt",ru:"макет"},
            {en:"launch ",tr:"lɔːnʧ",ru:"запуск, начало"},
            {en:"loop ",tr:"luːp",ru:"цикл"},
            {en:"mandatory ",tr:"ˈmændətərɪ",ru:"обязательные"},
            {en:"mentioning ",tr:"ˈmenʃnɪŋ",ru:"упоминание"},
            {en:"merge ",tr:"mɜːʤ",ru:"соединять"},
            {en:"mode ",tr:"məʊd",ru:"режим"},
            {en:"nested ",tr:"ˈnestɪd",ru:"вложенный"},
            {en:"node ",tr:"nəʊd",ru:"узел"},
            {en:"obtain ",tr:"əbˈteɪn",ru:"получать"},
            {en:"occur ",tr:"əˈkɜː",ru:"происходить, встречаться, иметь место, случаться"},
            {en:"originate ",tr:"əˈrɪʤɪneɪt",ru:"происходить, возникать"},
            {en:"opt ",tr:"ɔpt",ru:"выбирать, предпочитать"},
            {en:"optional ",tr:"ˈɔpʃənl",ru:"необязательный, произвольный"},
            {en:"override ",tr:"əʊvəˈraɪd",ru:"переопределять"},
            {en:"partial ",tr:"ˈpɑːʃəl",ru:"частичный"},
            {en:"pointer ",tr:"ˈpɔɪntə",ru:"указатель"},
            {en:"point out ",tr:"pɔɪnt aʊt",ru:"указывать"},
            {en:"points to",tr:" - ",ru:"указывает"},
            {en:"precise ",tr:"prɪˈsaɪz",ru:"точное"},
            {en:"precede ",tr:"prɪˈsiːd",ru:"предшествовать"},
            {en:"redundant ",tr:"rɪˈdʌndənt",ru:"избыточные"},
            {en:"reference ",tr:"ˈrefrəns",ru:"ссылка"},
            {en:"remote ",tr:"rɪˈməʊt",ru:"hosting - удаленный хостинг"},
            {en:"resultset",tr:" - ",ru:"итоговый набор(например набор данных)"},
            {en:"respectively ",tr:"rɪsˈpektɪvlɪ",ru:"соответственно"},
            {en:"restrict ",tr:"rɪsˈtrɪkt",ru:"ограничивать"},
            {en:"retrieve ",tr:"rɪˈtriːv",ru:"получить"},
            {en:"scope",tr:" - ",ru:"область(видимости)"},
            {en:"sequence ",tr:"ˈsiːkwəns",ru:"последовательность"},
            {en:"skip ",tr:"skɪp",ru:"пропустить"},
            {en:"specify ",tr:"ˈspesɪfaɪ",ru:"указывать, обозначать, отмечать"},
            {en:"subfolder ",tr:"sʌbˈfəʊldər",ru:"вложенная папка"},
            {en:"sufficient ",tr:"səˈfɪʃənt",ru:"достаточный"},
            {en:"template ",tr:"ˈtemplɪt",ru:"шаблон"},
            {en:"typecasting performed",tr:" - ",ru:"приведение типов"},
            {en:"tip ",tr:"tɪp",ru:"совет"},
            {en:"trigger ",tr:"ˈtrɪgə",ru:"инициировать"},
            {en:"URL {Uniform Resourse Locator}",tr:" - ",ru:"универсальный указатель ресурса"},
            {en:"variable ",tr:"ˈvɛərɪəbl",ru:"переменная"},
            {en:"vulnerable ",tr:"ˈvʌlnərəbl",ru:"уязвимый"},
            {en:"worth ",tr:"wɜːθ",ru:"стоимость, цена"}
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
            //$scope.mode = "en-ru";
            //$scope.step = 0;
            //$scope.en = {text:'English',show:true};
            //$scope.tr = {text:'transcription',show:true};
            //$scope.ru = {text:'Russian',show:true};
            location.reload();
        }

    });//translateCtrl