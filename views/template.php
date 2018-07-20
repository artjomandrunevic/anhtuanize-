<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= $view->render('head') ?>
        <?php $view->style('theme', 'theme:public/assets/css/style.default.css') ?>
        <?php $view->script('theme', 'theme:public/assets/js/app.default.js') ?>
</head>

<body>

    <nav>
        <div class="nav-wrapper">
            <a href="<?= $view->url()->get() ?>" class="brand-logo">
                <?php if ($logo = $params['logo']) : ?>
                <img src="<?= $this->escape($logo) ?>" alt="">
                <?php else : ?>
                <?= $params['title'] ?>
                    <?php endif ?>
            </a>
            <?php if ($view->menu()->exists('main')) : ?>
                <?= $view->menu('main') ?>
            <?php endif ?>
        </div>
    </nav>

    <!-- Render menu position -->
    <?php if ($view->menu()->exists('main')) : ?>
        <?= $view->menu('main') ?>
    <?php endif ?>

    <!-- Render widget position -->
    <?php if ($view->position()->exists('sidebar')) : ?>
        <?= $view->position('sidebar') ?>
    <?php endif; ?>

    <!-- Render content -->
    <?= $view->render('content') ?>

    <!-- Insert code before the closing body tag  -->
    <?= $view->render('footer') ?>

</body>

</html>
