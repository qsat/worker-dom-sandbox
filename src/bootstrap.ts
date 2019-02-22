import { upgradeElement } from '@ampproject/worker-dom';
upgradeElement(document.getElementById('upgrade-me'), '/static/worker.js');
