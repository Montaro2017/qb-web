/* eslint-disable */
export default {
  lang: 'Русский',
  auto: 'Автоматически',

  close: 'Закрыть',
  no: 'Нет',
  yes: 'Да',
  cancel: 'Отмена',
  ok: 'ОК',

  start: 'Запустить',
  stop: 'Остановить',
  submit: 'Отправить',
  edit: 'Изменить',
  delete: 'Удалить',
  todo: 'Список дел',
  resume: 'Продолжить',
  pause: 'Приостановить',
  force_start: 'Запустить принудительно',
  info: 'Информация',
  reset: 'Сброс',
  login: 'Вход',
  search: 'Поиск',
  refresh: 'Обновить',
  location: 'Расположение',
  rename: 'Переименовать',
  trigger_application_shutdown: 'Выйти из qBittorrent',
  reannounce: 'Объявить повторно',
  recheck: 'Перепроверить',

  username: 'Имя пользователя',
  password: 'Пароль',

  name: 'Название',
  size: 'Размер',
  progress: 'Прогресс',
  status: 'Статус',
  seeds: 'Сиды',
  peers: 'Пиры',
  dl_speed: 'Качает',
  up_speed: 'Раздаёт',
  eta: 'Осталось',
  ratio: 'Ратио',
  added_on: 'Добавлен',

  settings: 'Настройки',
  logs: 'Логи',
  light: 'Светлый',
  dark: 'Тёмный',

  all: 'Все',
  category: 'Категория |||| Категории',
  uncategorized: 'Без категории',
  others: 'Другие',
  sites: 'Сайты',
  files: 'Файлы',
  less: 'Меньше',
  more: 'Больше',
  feed: 'Feed',
  date: 'Дата',
  query: 'Запрос',
  plugin: 'Плагин |||| Плагины',
  action: 'Действие |||| Действия',
  search_engine: 'Поисковый движок',
  usage: 'применение',
  plugin_manager: 'Управление плагинами',
  update_plugins: 'Обновить плагины',

  preferences: {
    change_applied: 'Настройки сохранены',
    downloads: 'Загрузки',
    adding_torrent: 'При добавлении торрента',
    create_subfolder_enabled: 'Создавать подпапку для торрентов со множеством файлов',
    start_paused_enabled: 'Не начинать загрузку автоматически',
    auto_delete_mode: 'Удалять торрент-файлы после добавления',
    preallocate_all: 'Предварительно резервировать место для всех файлов',
    incomplete_files_ext: 'Добавлять расширение .!qB к незавершённым файлам',
    saving_management: 'Управление сохранением',
    auto_tmm_enabled: 'Режим управления торрентом по умолчанию',
    torrent_changed_tmm_enabled: 'При изменении категории торрента',
    save_path_changed_tmm_enabled: 'При изменении пути сохранения по умолчанию',
    category_changed_tmm_enabled: 'При изменении пути сохранения категории',
    auto_mode: 'Автоматический',
    manual_mode: 'Ручной',
    switch_torrent_mode_to_manual: 'Переключить затронутые торренты в Ручной режим',
    move_affected_torrent: 'Переместить затронутые торренты',
    save_path: 'Путь сохранения по умолчанию',
    temp_path: 'Хранить незавершённые торренты в',
    export_dir: 'Копировать торрент-файлы в',
    export_dir_fin: 'Копировать торрент-файлы завершённых загрузок в',

    speed: 'Скорость',
    global_rate_limits: 'Общие ограничения скорости',
    alternate_rate_limits: 'Альтернативные ограничения скорости',
    alternate_schedule_enable_time: 'Запланировать использование особых ограничений скорости',
    dl_limit: 'Загрузка (KiB/s)',
    up_limit: 'Отдача (KiB/s)',
    zero_for_unlimited: '«0» — без ограничений',
    schedule_from: 'С',
    schedule_to: 'До',
    scheduler_days: 'Когда',
    limit_utp_rate: 'Применять ограничения скорости к протоколу µTP',
    limit_tcp_overhead: 'Применять ограничения скорости к служебному трафику',
    limit_lan_peers: 'Применять ограничения скорости к локальным пирам',

    webui: 'Веб-интерфейс',
    data_update_interval: 'Интервал обновления (ms)',
    webui_remote_control: 'Веб-интерфейс (удалённое управление)',
    ip_address: 'IP-адрес',
    ip_port: 'Порт',
    enable_upnp: 'Использовать UPnP / NAT-PMP для проброса порта через мой роутер',
    authentication: 'Аутентификация',
    web_ui_username: 'Имя пользователя',
    web_ui_password: 'Пароль',
    bypass_local_auth: 'Пропускать аутентификацию клиентов для localhost',
    bypass_auth_subnet_whitelist: 'Пропускать аутентификацию клиентов для разрешённых подсетей',
    web_ui_session_timeout: 'Таймаут сессии',
    web_ui_max_auth_fail_count: 'Блокировать клиента после серии сбоев',
    web_ui_ban_duration: 'заблокировать на',
    web_ui_seconds: 'секунд',
    new_password: 'Изменить текущий пароль...',

    display_speed_in_title: 'Показывать скорость загрузки в заголовке окна',
  },

  title: {
    _: 'Заголовок',
    add_torrents: 'Добавить торрент',
    delete_torrents: 'Удалить торрент',
    set_category: 'Установить категорию',
    edit_tracker: 'Изменить трекер',
    set_location: 'Установить расположение',
    recheck_torrents: 'Перепроверить торренты',
  },

  label: {
    switch_to_old_ui: 'Переключиться на старый интерфейс',
    create_subfolder: 'Создать подпапку',
    start_torrent: 'Запустить торрент',
    skip_hash_check: 'Пропустить проверку хеша',
    in_sequential_order: 'В последовательном порядке',
    first_and_last_pieces_first: 'Сначала первая и последняя часть',

    also_delete_files: 'Также удалить файлы',

    auto_tmm: 'Автоуправление торрентом',

    adding: 'Добавление…',
    reloading: 'Перезагрузка…',
    deleting: 'Удаление…',
    moving: 'Перемещение…',
    moved: 'Перемещено',
    next: 'Далее',
    back: 'Назад',
    confirm: 'Подтвердить',
    reannounced: 'Объявлен повторно',
    rechecking: 'Перепроверка…',
    dht_nodes: '%{smart_count} узел |||| Узлов: %{smart_count}',
    base_url: 'Базовый URL',
  },

  msg: {
    item_is_required: 'Требуется %{item}',
  },

  dialog: {
    trigger_exit_qb: {
      title: 'Выйти из qBittorrent',
      text: 'Выйти из qBittorrent?',
    },
    add_torrents: {
      placeholder: 'Начните скачивать торренты, переместив их сюда,\nили нажмите кнопку вложения справа, чтобы выбрать.',
      hint: 'Одна ссылка на строку',
    },
    delete_torrents: {
      msg: 'Удалить выбранные торренты из списка передачи?',
      also_delete_same_name_torrents: 'Также удалить один торрент с тем же именем |||| Также удалить торренты с тем же именем (всего %{smart_count})',
    },
    set_category: {
      move: 'Переместить выбранные торренты в категорию %{category}?',
      reset: 'Вы уверены, что хотите сбросить категорию выбранных торрентов?',
      also_move_same_name_torrents: 'Также переместить один торрент с тем же именем |||| Также переместить торренты с тем же именем (всего %{smart_count})',
    },
    switch_locale: {
      msg: 'Переключить язык на %{lang}?\nЭто действие перезагрузит страницу.',
    },
    recheck_torrents: {
      msg: 'Перепроверить торренты?',
    },
    rss: {
      add_feed: 'Добавить Feed',
      feed_url: 'Ссылка Feed',
      auto_refresh: 'Автообновление',
      auto_download: 'Автоскачивание',
      delete_feeds: 'Удалить выбранные каналы?',
      date_format: '%{date} (%{duration} назад)',
    },
    rss_rule: {
      add_rule: 'Добавить правило',
      new_rule_name: 'Название нового правила',
      delete_rule: 'Удалить выбранное правило?',
      title: 'Загрузчик RSS',
      rule_settings: 'Настройки правила',

      use_regex: 'Использовать регулярное выражение',
      must_contain: 'Должен содержать',
      must_not_contain: 'Не должен содержать',
      episode_filter: 'Фильтр эпизодов',
      smart_episode: 'Использовать умный фильтр эпизодов',
      assign_category: 'Назначить категорию',

      apply_to_feeds: 'Применить правило к Feed',
    },
  },

  category_state: {
    _: 'Статистика',

    downloading: 'Скачивается',
    seeding: 'Раздаётся',
    completed: 'Завершено',
    resumed: 'Возобновлён',
    paused: 'Приостановлен',
    active: 'Активный',
    inactive: 'Не активный',
    errored: 'Ошибочный',
  },

  torrent_state: {
    error: 'error',
    missingFiles: 'missingFiles',
    uploading: 'uploading',
    pausedUP: 'pausedUP',
    queuedUP: 'queuedUP',
    stalledUP: 'stalledUP',
    checkingUP: 'checkingUP',
    forcedUP: 'forcedUP',
    allocating: 'allocating',
    downloading: 'downloading',
    metaDL: 'metaDL',
    pausedDL: 'pausedDL',
    queuedDL: 'queuedDL',
    stalledDL: 'stalledDL',
    checkingDL: 'checkingDL',
    forceDL: 'forceDL',
    checkingResumeData: 'checkingResumeData',
    moving: 'moving',
    unknown: 'unknown',
  },
}
