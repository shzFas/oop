# Наследование

Наследование - крайне простая комплекция 

Пример: 
Класс - `Человек`

У которого есть: *Имя, Фамилия, Возраст*, на данном этапе нам не нужны другие данные

Также есть Класс - `Работник`

У него также есть - *Имя, Фамилия, Возраст*, но помимо этого добавляется еще данные для работодателя, пример: *Номер паспорта, ИИН, Серия паспорта*
Получается что класс `Работник` наследует свойства у класса `Человек`

Также есть Класс - `Разработчик`

Помимо выше упомянутых - *Имя, Фамилия, Возраст* и *Номер паспорта, ИИН, Серия паспорта*, у `Разработчика` есть свои Свойства которые нужны именно ему, условно это - *Язык программирование, Уровень, Команда с которой работает*

Хорошо спроектированная ООП система позволяет переиспользовать код, масштабировать его и поддерживать, и важным винтиком в системе является как раз таки механизм наследования 