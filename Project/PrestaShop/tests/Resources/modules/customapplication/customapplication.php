<?php

if (!defined('_PS_VERSION_')) {
    exit;
}

class CustomApplication extends Module
{
    public function __construct()
    {
        $this->name = 'customapplication';
        $this->tab = 'front_office_features';
        $this->version = '1.0.0';
        $this->author = 'Athirat Takaikaew';
        $this->need_instance = 0;

        parent::__construct();

        $this->displayName = $this->l('Custom Application Module');
        $this->description = $this->l('Module for handling custom applications.');
    }

    public function install()
    {
        return parent::install() &&
            $this->registerHook('displayHeader') &&
            $this->registerHook('displayCustomerAccount');
    }

    public function uninstall()
    {
        return parent::uninstall();
    }

    public function getContent()
    {
        return 'This is the configuration page of your module.';
    }

    public function hookDisplayCustomerAccount($params)
    {
    return $this->display(__FILE__, 'my-account-link.tpl');
    }

    public function hookDisplayHeader()
    {
    if (Tools::getValue('controller') === 'module' && Tools::getValue('module') === 'customapplication' && Tools::getValue('fc') === 'module') {
        $this->context->smarty->assign('form_action', $this->context->link->getModuleLink('customapplication', 'submitapplication'));
        return $this->display(__FILE__, 'application-form.tpl');
    }
    return '';
    }

    public function hookProcessController($params)
    {
    if (Tools::getValue('controller') === 'module' && Tools::getValue('module') === 'customapplication' && Tools::getValue('fc') === 'module' && Tools::getValue('action') === 'submitapplication') {
        // Process the form data here
        $this->processForm();
    }
    }

    protected function processForm()
    {
    // Process the form data
    $name = Tools::getValue('name');
    $email = Tools::getValue('email');
    $document = $_FILES['document'];

    // Perform any necessary validation and processing
    // Generate voucher, save data to database, etc.

    // Display a success message
    $this->context->smarty->assign('success_message', 'Application submitted successfully!');
    echo $this->display(__FILE__, 'success-message.tpl');
    exit;
    }


}
