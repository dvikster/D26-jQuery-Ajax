<?php
require_once 'config.php';
require_once 'function.php';

$action = $_POST['action'];

switch ($action) {
    case 'init':
        fInit();
        break;
    case 'create':
        fCreate();
        break;
    case 'delete':
        fDelete();
        break;
}