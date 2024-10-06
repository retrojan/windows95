function openApp(app) {
    const appWindow = document.getElementById('app-window');
    const windowTitle = document.getElementById('window-title');
    const appIframe = document.getElementById('app-iframe');

    if (app === 'firefox') {
        appIframe.src = 'changelogs.html'; // Укажите нужный локальный файл
        windowTitle.textContent = 'Mozilla Firefox';
    } else if (app === 'explorer') {
        appIframe.src = 'explorer.html'; // Укажите нужный локальный файл
        windowTitle.textContent = 'Проводник';
    } else if (app === 'index') {
        appIframe.src = 'index.html'; // Открываем главную страницу
        windowTitle.textContent = 'Главная страница';
    }

    appWindow.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    const urlInput = document.getElementById('url-input');
    const firefoxWindow = document.getElementById('firefox-window');
    const iframe = document.getElementById('iframe');

    // Обработчик события на нажатие клавиши
    urlInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const input = urlInput.value;

            // Проверка на "index.html"
            if (input.toLowerCase() === 'index.html') {
                // Загружаем dovuebuvalsya.html в iframe
                iframe.src = 'dovuebuvalsya.html'; 
                urlInput.value = 'dovuebuvalsya.html'; // Обновление адресной строки
            } else {
                // Загружаем обычный адрес в iframe
                iframe.src = input; // Открытие в iframe
                urlInput.value = input; // Обновление адресной строки
            }

            // Показываем окно Firefox
            firefoxWindow.style.display = 'block';
        }
    });

    // Обновление адресной строки при изменении src iframe
    iframe.addEventListener("load", function() {
        urlInput.value = iframe.src; // Обновляем адресную строку на текущий адрес
    });
});




// Получаем элемент для ввода URL
const urlInput = document.getElementById('url-input');
const iframe = document.getElementById('iframe'); // Находим ваш iframe

// Обработчик события для нажатия клавиши
urlInput.addEventListener('keypress', function(event) {
    // Проверяем, была ли нажата клавиша Enter
    if (event.key === 'Enter') {
        // Открываем файл или сайт, введенный в адресной строке
        openResource(urlInput.value);
    }
});

// Функция для открытия файла или веб-сайта в iframe
function openResource(resource) {
    // Проверяем, начинается ли URL с 'http://' или 'https://'
    if (resource.startsWith('http://') || resource.startsWith('https://')) {
        iframe.src = resource; // Открываем веб-сайт
    } else {
        // Предполагаем, что это локальный файл
        iframe.src = resource; // Открываем локальный файл
    }
}


// Функция для открытия веб-сайта в iframe
function openWebsite(url) {
    // Проверяем, начинается ли URL с 'http://' или 'https://', если нет, добавляем 'http://'
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url; // Или 'https://' в зависимости от вашего предпочтения
    }
    iframe.src = url; // Устанавливаем новый URL в iframe
}

 // Открытие командной строки
        document.getElementById('command-prompt').onclick = function() {
            commandLine.style.display = 'block';
        };
        // Закрытие командной строки
        document.querySelector('#command-line .close-window').onclick = function() {
    document.getElementById('command-line').style.display = 'none';
};

        function openFile() {
        // Закрываем текущее окно
        window.open('', '_self').close();
        
        // Открываем новое окно с "файлом"
        const newWindow = window.open('', '', 'width=400,height=200');
        newWindow.document.write('<h1>Вы открыли файл: minecraft.exe</h1>');
        newWindow.document.write('<p>Это виртуальный файл. Настоящий файл отсутствует.</p>');
        newWindow.document.write('<button onclick="window.close()">Закрыть</button>');
        newWindow.document.close();
    }
                // Функция для открытия окна Загрузок
                function openDownloads() {
                document.getElementById('downloads-window').style.display = 'block';
                document.getElementById('explorer-window').style.display = 'none';
            }

            // Закрытие окна загрузок
            document.querySelector('#downloads-window .close-window').onclick = function() {
                document.getElementById('downloads-window').style.display = 'none';
                document.getElementById('explorer-window').style.display = 'block'; // Возвращаем проводник
            };
        window.onload = function() {
        // Показываем окно Firefox после загрузки страницы
        firefoxWindow.style.display = 'block';
        makeWindowDraggable(firefoxWindow);

        // Убираем загрузочный экран после загрузки
        document.getElementById('boot-screen').style.display = 'none';

        // Показываем рабочий стол
        document.getElementById('desktop').style.display = 'block';
    };
        // Закрытие командной строки
    document.querySelector('#command-line .close-window').onclick = function() {
    document.getElementById('command-line').style.display = 'none';
};
let windowOffsetX = 50; // Начальные координаты X
    let windowOffsetY = 50; // Начальные координаты Y
    let windowIncrement = 30; // Смещение по оси X и Y для каждого следующего окна

    // Функция для перетаскивания окон
    function makeWindowDraggable(windowElement) {
        const header = windowElement.querySelector('.window-header');
        let isDragging = false;
        let offsetX, offsetY;

        header.onmousedown = function (e) {
            isDragging = true;
            offsetX = e.clientX - windowElement.getBoundingClientRect().left;
            offsetY = e.clientY - windowElement.getBoundingClientRect().top;
        };

        document.onmousemove = function (e) {
            if (isDragging) {
                windowElement.style.left = (e.clientX - offsetX) + 'px';
                windowElement.style.top = (e.clientY - offsetY) + 'px';
            }
        };

        document.onmouseup = function () {
            isDragging = false;
        };
    }

    // Функция для отображения окна в новой позиции
    function showWindow(windowElement) {
        windowElement.style.display = 'block';
        windowElement.style.left = windowOffsetX + 'px';
        windowElement.style.top = windowOffsetY + 'px';

        // Сдвиг для следующего окна
        windowOffsetX += windowIncrement;
        windowOffsetY += windowIncrement;

        makeWindowDraggable(windowElement);
    }

    // Инициализация окон браузера
    const firefoxIcon = document.getElementById('firefox-icon');
    const firefoxWindow = document.getElementById('firefox-window');
    const explorerIcon = document.getElementById('explorer-icon');
    const explorerWindow = document.getElementById('explorer-window');
    const startButton = document.getElementById('start-button');
    const startMenu = document.getElementById('start-menu');
    const controlPanelButton = document.getElementById('control-panel');
    const controlPanelWindow = document.getElementById('control-panel-window');
    const commandLine = document.getElementById('command-line');
    const commandInput = document.getElementById('command-input');
    const commandOutput = document.getElementById('command-output');

    // Открытие окон с новым расположением
    firefoxIcon.onclick = function () {
        showWindow(firefoxWindow);
    };

    explorerIcon.onclick = function () {
        showWindow(explorerWindow);
    };

    startButton.onclick = function () {
        startMenu.style.display = startMenu.style.display === 'none' ? 'block' : 'none';
    };

    controlPanelButton.onclick = function () {
        showWindow(controlPanelWindow);
    };

    commandInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = commandInput.value.trim();
            commandOutput.innerHTML += `<div>${command}</div>`; // Отображаем введенную команду
            commandInput.value = '';

            // Проверка команды
            if (command === 'security = off') {
                // Заменяем обои на страшные
                document.body.style.backgroundImage = "url('scary_background.jpg')";
                document.body.style.backgroundSize = 'cover';

                // Меняем цвет на красный и добавляем "кровь"
                document.body.style.transition = 'background-color 1s';
                document.body.style.backgroundColor = 'red';

                // Создаем эффект "текущей крови"
                let bloodEffect = document.createElement('div');
                bloodEffect.style.position = 'fixed';
                bloodEffect.style.top = '0';
                bloodEffect.style.left = '0';
                bloodEffect.style.width = '100%';
                bloodEffect.style.height = '100%';
                bloodEffect.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
                bloodEffect.style.pointerEvents = 'none';
                document.body.appendChild(bloodEffect);

// Сообщение о повреждении через 30 секунд
setTimeout(() => {
    // Чёрный экран
    document.body.style.backgroundColor = 'black';
    document.body.innerHTML = ''; // Очищаем содержимое

    // Закрытие окна через 3 секунды
    setTimeout(() => {
        // Создание элемента для отображения поврежденных частей
        const damageList = document.createElement('div');
        damageList.style.position = 'fixed';
        damageList.style.top = '10px'; // Расположение сверху
        damageList.style.left = '10px'; // Расположение слева
        damageList.style.color = 'red'; // Цвет текста
        damageList.style.fontSize = '20px'; // Размер текста
        damageList.style.fontFamily = 'Courier New, monospace'; // Шрифт
        damageList.style.zIndex = '1000'; // Убедитесь, что элемент поверх других

        // Список поврежденных частей
        damageList.innerHTML = `
            <h1>Поврежденные части:</h1>
            <ul>
                <li>GPU</li>
                <li>CPU</li>
                <li>Boot Sector Drive</li>
                <li>RAM</li>
                <li>Motherboard</li>
            </ul>
        `;

        // Добавление списка поврежденных частей на страницу
        document.body.appendChild(damageList);
    }, 3); // Ждем 3 секунды для появления списка
}, 3000); // Ждем 30 секунд

            }
        }
    });


        // Закрытие окон
        document.querySelectorAll('.close-window').forEach(button => {
            button.onclick = function() {
                button.closest('.window').style.display = 'none';
            };
        });

        // Минимизация окон
        document.querySelectorAll('.minimize-window').forEach(button => {
            button.onclick = function() {
                button.closest('.window').style.display = 'none';
            };
        });

        // Максимизация окон
        document.querySelectorAll('.maximize-window').forEach(button => {
            button.onclick = function() {
                const win = button.closest('.window');
                if (win.style.width !== '100%') {
                    win.style.width = '100%';
                    win.style.height = '100%';
                } else {
                    win.style.width = '800px';
                    win.style.height = '600px';
                }
            };
        });

    function openPCInfo() {
        document.getElementById('pcInfoWindow').style.display = 'block';
    }

    function closePCInfo() {
        document.getElementById('pcInfoWindow').style.display = 'none';
    }

