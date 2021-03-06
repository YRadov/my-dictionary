var app = angular.module("translateModule", []);

app.controller("translateCtrl", function ($rootScope,$scope) {
//-------------------------------------------------------------------------
    //===ПЕРЕМЕННЫЕ====//
    //console.log(' = '+);
    //МАССИВ СЛОВ
    $scope.Words = [
        {en: "accept ", tr: "əkˈsept", ru: "принимать, брать"},
        {en: "according ", tr: "əˈkɔːdɪŋ", ru: "в зависимости от"},
        {en: "accomplish ", tr: "əˈkɔmplɪʃ", ru: "выполнять, совершать"},
        {en: "assign", tr: "əˈsaɪn", ru: "назначать, присваивать"},
        {en: "adjust ", tr: "əˈʤʌst", ru: "регулировать"},
        {en: "admit ", tr: "ədˈmɪt", ru: "допускать, признать"},
        {en: "affect ", tr: "əˈfekt", ru: "влиять, воздействовать"},
        {en: "affair ", tr: "əˈfɛə", ru: "дело, вопрос"},
        {en: "alter", tr: "ˈɔːltə", ru: "изменять, менять, переделывать"},
        {en: "ambiguous ", tr: "æmˈbɪgjʊəs", ru: "неоднозначно"},
        {en: "ancestor ", tr: "ˈænsɪstə", ru: "предок"},
        {en: "anticipate ", tr: "ænˈtɪsɪpeɪt", ru: "ожидать, прогнозировать"},
        {en: "anticipating ", tr: "ænˈtɪsɪpeɪtɪŋ", ru: "опережающий"},
        {en: "apply ", tr: "əˈplaɪ", ru: "применять"},
        {en: "approach ", tr: "əˈprəʊʧ", ru: "подход , метод"},
        {en: "appropriate ", tr: "əˈprəʊprɪɪt", ru: "соответствующий, надлежащий"},
        {en: "arbitrary ", tr: "ˈɑːbɪtrərɪ", ru: "произвольный, случайный"},
        {en: "assets ", tr: "ˈæsets", ru: "средства"},
        {en: "assertion ", tr: "əˈsɜːʃn] methods - методы проверки"},
        {en: "assigned ", tr: "əˈsaɪnd", ru: "заданный, назначенный"},
        {en: "assignment ", tr: "əˈsaɪnmənt", ru: "назначение"},
        {en: "asterisk ", tr: "ˈæstərɪsk", ru: "звездочка"},
        {en: "backward-compatible ", tr: "ˈbækwəd-kəmˈpætəbl", ru: "обратно совместимый"},
        {en: "binding ", tr: "ˈbaɪndɪŋ", ru: "обязательный, связующий"},
        {en: "bispatch ", tr: "", ru: "отправлять, отправка"},
        {en: "bootstrap ", tr: "ˈbuːtstræp", ru: "начальная загрузка"},
        {en: "bound ", tr: "baʊnd", ru: "связанный"},
        {en: "carry out ", tr: "---", ru: "выполнять, доводить до конца"},
        {en: "capable ", tr: "ˈkeɪpəbl", ru: "способен, дееспособный, работоспособный"},
        {en: "capture ", tr: "ˈkæpʧə", ru: "захватывает"},
        {en: "cause ", tr: "koːz", ru: "причина"},
        {en: "charset ", tr: "kɑːst", ru: "кодировка"},
        {en: "collaborate ", tr: "kəˈlæbəreɪt", ru: "сотрудничать"},
        {en: "compatibility ", tr: "kəmpætəˈbɪlɪtɪ", ru: "совместимость, сочетаемость"},
        {en: "circumstances ", tr: "ˈsɜːkəmstənsɪz", ru: "обстоятельства, условия"},
        {en: "consequently ", tr: "ˈkɔnsɪkwəntlɪ", ru: "следовательно"},
        {en: "consequent ", tr: "ˈkɔnsɪkwənt", ru: "следствие"},
        {en: "consider", tr: "kənˈsɪdə", ru: "считать, учитывать"},
        {en: "considerably", tr: "kənˈsɪdərəblɪ", ru: "значительно,существенно"},
        {en: "consistency ", tr: "kənˈsɪstənsɪ", ru: "последовательность"},
        {en: "constraint ", tr: "kənˈstreɪnt", ru: "ограничение"},
        {en: "conventional ", tr: "kənˈvenʃənl", ru: "обычный, общепринятый"},
        {en: "credential ", tr: "krɪˈdenʃəl", ru: "учетные данные"},
        {en: "customize ", tr: "ˈkʌstəmaɪz", ru: "настройка"},
        {en: "dash ", tr: "dæʃ", ru: "тире"},
        {en: "dedicated ", tr: "ˈdedɪkeɪtɪd", ru: "выделенный, назначенный"},
        {en: "default state ", tr: "dɪˈfɔːlt steɪt", ru: "состояние по умолчанию"},
        {en: "derived", tr: "dɪˈraɪvd", ru: "производный"},
        {en: "detached ", tr: "dɪˈtæʧt", ru: "отдельный, несвязанный"},
        {en: "desired ", tr: "dɪˈzaɪəd", ru: "желательно, желанный"},
        {en: "distinguish ", tr: "dɪsˈtɪŋgwɪʃ", ru: "различать, отличать"},
        {en: "edit ", tr: "ˈedɪt", ru: "редактировать"},
        {en: "embed ", tr: "ɪmˈbed", ru: "встраивать, внедрять"},
        {en: "either ", tr: "ˈaɪðə", ru: "или, любой, один из двух, так же"},
        {en: "enclosed within ", tr: "---", ru: "заключенный в..."},
        {en: "enhanced ", tr: "ɪnˈhɑːnst", ru: "усовершенствовать, усиливать, повышать"},
        {en: "ensure", tr: "ɪnˈʃʊə", ru: "обеспечивать, гарантировать"},
        {en: "entail", tr: "ɪnteil", ru: "подразумевать, повлечь"},
        {en: "entity", tr: "ˈentɪtɪ", ru: "сущность, объект"},
        {en: "exempt", tr: "igzempt", ru: "освобождать"},
        {en: "expire", tr: "ɪksˈpaɪə", ru: "истекать, истечь, закончиться"},
        {en: "expose ", tr: "eksˈpəʊzeɪ", ru: "подвергать"},
        {en: "extended ", tr: "ɪksˈtendɪd", ru: "расширенный"},
        {en: "external ", tr: "eksˈtɜːnl", ru: "Внешний"},
        {en: "essential ", tr: "ɪˈsenʃəl", ru: "необходимый, важный"},
        {en: "estimate ", tr: "ˈestɪmɪt", ru: "оценка"},
        {en: "feature ", tr: "ˈfiːʧə", ru: "особенность"},
        {en: "fetch ", tr: "feʧ", ru: "выборка"},
        {en: "forced ", tr: "forst", ru: "принудительный, вынужденный"},
        {en: "frequency ", tr: "ˈfriːkwənsɪ", ru: "частота"},
        {en: "handle", tr: "hændl", ru: "обрабатывать, регулировать, управлять"},
        {en: "handler", tr: "ˈhændlər", ru: "обработчик"},
        {en: "hint ", tr: "hɪnt", ru: "подсказка"},
        {en: "implicitly ", tr: "ɪmˈplɪsɪtlɪ", ru: "неявно(implicitly convert – неявно преобразовывать)"},
        {en: "inconsistent ", tr: "ɪnkənˈsɪstənt", ru: "несовместимый"},
        {en: "indeed ", tr: "ɪnˈdiːd", ru: "действительно, всамом деле"},
        {en: "indent ", tr: "ˈɪndent", ru: "отступ, абзац(отступ при написании кода)"},
        {en: "inheritance", tr: "ɪnˈherɪtəns", ru: "наследование"},
        {en: "inheritor ", tr: "ɪnˈherɪtə", ru: "наследник"},
        {en: "insert ", tr: "ˈɪnsət", ru: "вставка"},
        {en: "instance ", tr: "ˈɪnstəns", ru: "экземпляр(случай, пример)"},
        {en: "intended", tr: "ɪnˈtendɪd", ru: "предназначенный, рассчитанный"},
        {en: "intentionally ", tr: "ɪnˈtenʃnəlɪ", ru: "намеренно"},
        {en: "interaction ", tr: "ɪntərˈækʃn", ru: "взаимодействие"},
        {en: "invoke ", tr: "ɪnˈvəʊk", ru: "вызвать"},
        {en: "involve ", tr: "ɪnˈvɔlv", ru: "касаться, затрагивать"},
        {en: "issue ", tr: "ˈɪʃuː", ru: "вопрос, проблема"},
        {en: "item ", tr: "ˈaɪtəm", ru: "пункт, элемент"},
        {en: "judgement ", tr: "ˈʤʌʤmənt", ru: "решение"},
        {en: "layout ", tr: "ˈleɪaʊt", ru: "макет"},
        {en: "launch ", tr: "lɔːnʧ", ru: "запуск, начало"},
        {en: "loop ", tr: "luːp", ru: "цикл"},
        {en: "make sure ", tr: "---", ru: "убедиться в..."},
        {en: "mandatory ", tr: "ˈmændətərɪ", ru: "обязательные"},
        {en: "mentioning ", tr: "ˈmenʃnɪŋ", ru: "упоминание"},
        {en: "merge ", tr: "mɜːʤ", ru: "соединять"},
        {en: "mode ", tr: "məʊd", ru: "режим"},
        {en: "moreover ", tr: "mɔːˈrəʊvə", ru: "более того"},
        {en: "nested ", tr: "ˈnestɪd", ru: "вложенный"},
        {en: "node ", tr: "nəʊd", ru: "узел"},
        {en: "obtain ", tr: "əbˈteɪn", ru: "получать"},
        {en: "occur ", tr: "əˈkɜː", ru: "происходить, встречаться, иметь место, случаться"},
        {en: "originate ", tr: "əˈrɪʤɪneɪt", ru: "происходить, возникать"},
        {en: "opt ", tr: "ɔpt", ru: "выбирать, предпочитать"},
        {en: "optional ", tr: "ˈɔpʃənl", ru: "необязательный, произвольный"},
        {en: "override ", tr: "əʊvəˈraɪd", ru: "переопределять"},
        {en: "partial ", tr: "ˈpɑːʃəl", ru: "частичный"},
        {en: "pointer ", tr: "ˈpɔɪntə", ru: "указатель"},
        {en: "point out ", tr: "pɔɪnt aʊt", ru: "указывать"},
        {en: "points to", tr: " - ", ru: "указывает"},
        {en: "precise ", tr: "prɪˈsaɪz", ru: "точное"},
        {en: "precede ", tr: "prɪˈsiːd", ru: "предшествовать"},
        {en: "proceed ", tr: "proˈsiːd", ru: "продолжать, приступать, приниматься"},
        {en: "redundant ", tr: "rɪˈdʌndənt", ru: "избыточные"},
        {en: "reference ", tr: "ˈrefrəns", ru: "ссылка"},
        {en: "relate ", tr: "rɪˈleɪt", ru: "соотносить"},
        {en: "remote ", tr: "rɪˈməʊt", ru: "hosting - удаленный хостинг"},
        {en: "resultset", tr: " - ", ru: "итоговый набор(например набор данных)"},
        {en: "respectively ", tr: "rɪsˈpektɪvlɪ", ru: "соответственно"},
        {en: "restrict ", tr: "rɪsˈtrɪkt", ru: "ограничивать"},
        {en: "retrieve ", tr: "rɪˈtriːv", ru: "получить"},
        {en: "regarding", tr: "rɪˈgɑːdɪŋ", ru: "относительно,касательно"},
        {en: "robust", tr: "rəʊˈbʌst", ru: "надежный"},
        {en: "scope", tr: " - ", ru: "область(видимости)"},
        {en: "sequence ", tr: "ˈsiːkwəns", ru: "последовательность"},
        {en: "skip ", tr: "skɪp", ru: "пропустить"},
        {en: "specify ", tr: "ˈspesɪfaɪ", ru: "указывать, обозначать, отмечать"},
        {en: "source ", tr: "so:s", ru: "выискивать"},
        {en: "subfolder ", tr: "sʌbˈfəʊldər", ru: "вложенная папка"},
        {en: "sufficient ", tr: "səˈfɪʃənt", ru: "достаточный"},
        {en: "suppose ", tr: "səˈpəʊz", ru: "предполагать"},
        {en: "template ", tr: "ˈtemplɪt", ru: "шаблон"},
        {en: "tip ", tr: "tɪp", ru: "совет"},
        {en: "threat ", tr: "θret", ru: "угроза"},
        {en: "typecasting performed", tr: " - ", ru: "приведение типов"},
        {en: "tought ", tr: "tʌf", ru: "трудный"},
        {en: "treat ", tr: "triːt", ru: "рассматривать, обрабатывать"},
        {en: "trigger ", tr: "ˈtrɪgə", ru: "инициировать"},
        {en: "URL {Uniform Resourse Locator}", tr: " - ", ru: "универсальный указатель ресурса"},
        {en: "variable ", tr: "ˈvɛərɪəbl", ru: "переменная"},
        {en: "vulnerable ", tr: "ˈvʌlnərəbl", ru: "уязвимый"},
        {en: "worth ", tr: "wɜːθ", ru: "стоимость, цена"}
    ];
    $rootScope.Words = $scope.Words;
    /**
     * режим отображения
     * @value en-ru, en, ru
     * @type {string}
     */
    $scope.mode = "en-ru";
    console.log('Слов в словаре - '+  $scope.Words.length);

    $scope.mode_active = 'checked';

    //Показ сообщений
    function errorMessages(message){
        $('.error').text(message).fadeIn().delay(2000).fadeOut();
    }

    //КОЛ-ВО СЛОВ В ХРАНИЛИЩЕ
    $scope.getCountWords = function()
    {
        if(localStorage.getItem("storeSize")
            && parseInt(localStorage.getItem("storeSize")) !== 0)
        {
            errorMessages('!!!В ХРАНЛИЩЕ ЕСТЬ ДАННЫЕ!!!');
            //размер массива слов в хранилище
            loaded_size = parseInt(localStorage.getItem("storeSize"));
        }
        else
        {
            errorMessages('!!!В ХРАНЛИЩЕ НЕТ ДАННЫХ!!!');
            //инициируем хранилище(0)
            loaded_size = 0;
            localStorage.setItem("storeSize",loaded_size);
        }
        return loaded_size;
    }


    //ПОКАЗ ВСЕХ СЛОВ В ХРАНИЛИЩЕ
    $scope.showLocalWords = function()
    {
        loaded_size = $scope.getCountWords();
        console.log('++++++++++++++++++++++++++++++++++');
        console.log('СЛОВА В ХРАНИЛИЩЕ');
        console.log('слов в хранилище - '+loaded_size);
        for(var i = 0; i < loaded_size; i++)
        {
            var word_of_store = localStorage.getItem('localWord'+i);
            var word_parse = JSON.parse(word_of_store);
            console.log(word_parse);
        }
        console.log('++++++++++++++++++++++++++++++++++');
    };


    //******************************************

    //ДОПОЛНЕНИЕ СЛОВАМИ ИЗ ХРАНИЛИЩА
    $scope.addWordsFromLocal = function()
    {
        //получаем кол-во слов в хранилище
        var size = $scope.getCountWords();
        console.log('Слов в хранилище - '+size);
        //последний индекс массива
        var index = $scope.Words.length;
        console.log('index - '+index);
        for(var i = 0; i < size; i++)
        {
            var word_of_store = localStorage.getItem('localWord'+i);
            var word_parse = JSON.parse(word_of_store);
            console.log(word_parse);
            $scope.Words[index] = word_parse;
            console.log( 'Words['+index+'] = '+$scope.Words[index]);
            //console.log( $scope.Words[index]);
            console.log('-----------------------');
            index++;
        }

    }();
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //счетчик для перехода по словам вперед/назад
    $scope.step = 0;
    //min и max значения step
    $scope.min_step = 0;
    $scope.max_step = $scope.Words.length;
    for(var i = 0; i < $scope.min_step; i++)
    {
        console.log(Words[i]);
    }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //------------------------



//-------------------------------------------------------------------------
    //ВЫВОД ЗНАЧЕНИЙ СЛОВ(начальные значения)
    $scope.en = {text:'English',show:true};
    $scope.tr = {text:'transcription',show:true};
    $scope.ru = {text:'Russian',show:true};
//-------------------------------------------------------------------------
    //ПЕРЕКЛЮЧЕНИЕ РЕЖИМОВ
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
        $scope.mode = "en-ru";
        $scope.step = 0;
        $scope.en = {text:'English',show:true};
        $scope.tr = {text:'transcription',show:true};
        $scope.ru = {text:'Russian',show:true};
        //location.reload();
        $('#en_ru_show').prev().addClass("ui-btn-active ui-radio-on");
        $('#en_show').prev().removeClass("ui-btn-active ui-radio-on");
        $('#ru_show').prev().removeClass("ui-btn-active ui-radio-on");
    }

});//translateCtrl
//****************************************************************************
//****************************************************************************
//****************************************************************************
app.controller("newWordsCtrl", function ($scope) {
    //очистка памяти
    //localStorage.clear();

    //ЗНАЧЕНИЯ СЛОВА
    $scope.en_new = '';
    $scope.tr_new = '';
    $scope.ru_new = '';
    //размер массива слов в хранилище
    var loaded_size = 0;


    //Показ сообщений
    function errorMessages(message){
        $('.error').text(message).fadeIn().delay(2000).fadeOut();
    }


    var localWord;
    /**
     * JSON.parse – читает объекты из строки в формате JSON.
     * JSON.stringify – превращает объекты в строку в формате JSON,
     * используется, когда нужно из JavaScript передать данные по сети.
     * {"en":"accept","tr":"əkˈsept","ru":"принимать, брать"},
     */


    //ПОКАЗ ВСЕХ СЛОВ В ХРАНИЛИЩЕ
    $scope.showLocalWords = function()
    {
        console.log('++++++++++++++++++++++++++++++++++');
        console.log('СЛОВА В ХРАНИЛИЩЕ');
        console.log('слов в хранилище - '+loaded_size);
        for(var i = 0; i < loaded_size; i++)
        {
            var word_of_store = localStorage.getItem('localWord'+i);
            var word_parse = JSON.parse(word_of_store);
            console.log(word_parse);

        }
        console.log('++++++++++++++++++++++++++++++++++');
    }


    //получение количества слов в хранилище
    $scope.getCountWords = function()
    {
        if(localStorage.getItem("storeSize")
            && parseInt(localStorage.getItem("storeSize")) !== 0)
        {
            errorMessages('!!!В ХРАНЛИЩЕ ЕСТЬ ДАННЫЕ!!!');
            //размер массива слов в хранилище
            loaded_size = parseInt(localStorage.getItem("storeSize"));
        }
        else
        {
            errorMessages('!!!В ХРАНЛИЩЕ НЕТ ДАННЫХ!!!');
            //инициируем хранилище(0)
            loaded_size = 0;
            localStorage.setItem("storeSize",loaded_size);
        }
        return loaded_size;
    }


    //СОХРАНЕНИЕ НОВОГО СЛОВА
    $scope.setNewWord = function()
    {
        //проверяем заполнение полей
        if(!$scope.en_new || !$scope.ru_new)
        {
            errorMessages('!!!ВВЕДЕНЫ НЕ ВСЕ ДАННЫЕ!!!');
            return false;
        }

        var res = confirm('Сохранить слово?');

        if(res)
        {
            loaded_size = $scope.getCountWords();
            console.log('слов в хранилище - '+loaded_size);
            //номер слова = loaded_size
            var word_num = loaded_size;

            var en = $scope.en_new;
            var tr = ($scope.tr_new)?$scope.tr_new:"undefined";
            var ru = $scope.ru_new;
            //заполнение нового слова
            localWord = {
                "en":en,
                "tr":tr,
                "ru":ru
            };
            //перед сохранением сериализуем
            var word_fo_store = JSON.stringify(localWord);
            //console.log('Сохраняемое слово:');
            //console.log(word_fo_store);
            var StoreName = 'localWord'+word_num;
            //console.log('StoreName'+StoreName);

            //помещаем строку в хранилище
            localStorage.setItem(StoreName,word_fo_store);

            //console.log(localStorage.getItem(StoreName));
            //*******************************************
            //получение объекта из строки
            //var word_parse = JSON.parse(word_fo_store);
            //console.log(word_parse['en']);
            //*******************************************
        }

        //увеличиваем кол-во слов в хранилище
        loaded_size++;
        localStorage.setItem("storeSize",loaded_size);

        errorMessages('!!!СЛОВО ДОБАВЛЕНО!!!');

        //очищаем поля формы
        $scope.resetNewWord();

        //все слова в хранилище
        $scope.showLocalWords();
    };


    //ОЧИСТКА ПОЛЕЙ НОВОГО СЛОВА
    $scope.resetNewWord = function()
    {
        $scope.en_new = '';
        $scope.tr_new = '';
        $scope.ru_new = '';
    };

});//newWordsCtrl
//****************************************************************************
//****************************************************************************
//****************************************************************************
app.controller("searchCtrl", function ($rootScope,$scope){
    $scope.Words = $rootScope.Words;
    $scope.search = '';
});