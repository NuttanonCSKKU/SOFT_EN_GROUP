<?php

if ( ! defined('PS_VERSION_'))
    return false;

class CommentProduct extends Module implements \src\Core\Module\WidgetInterface
{
    private $templateFile;

    public function __construct()
    {
        $this->name = 'commentproduct';
        $this->author = 'Athirat Takaikaew';
        $this->version = '1.0';

        $this->bootstrap = true;
        parent::__construct();

        $this->displayName = $this->trans('Product comment', array(), 'Modules.CommentProduct.Admin');
        $this->description = $this->trans('Allow store users to leave a comment for product', array(), 'Modules.CommentProduct.Admin');
        $this->ps_versions_compliancy = array('min' => '1.7', 'max' => _PS_VERSION_);

        $this->templateFile = 'module:commentProduct/views/templates/hook/CommentProduct.tpl';
    }

    public function renderWidget($hookName, array $configuration)
    {
        return $this->fetch($this->templateFile);
    }
    public function getWidgetVariable($hookName, array $configuration)
    {

    }
}