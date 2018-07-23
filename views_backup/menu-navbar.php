<?php if ($root->getDepth() === 0) : ?>
<ul id="nav-mobile" class="right hide-on-med-and-down">
<?php endif ?>

    <?php foreach ($root->getChildren() as $node) : ?>
    <li class="<?= $node->hasChildren() ? 'dropdown-trigger' : '' ?><?= $node->get('active') ? ' active' : '' ?>" <?= ($root->getDepth() === 0 && $node->hasChildren()) ? 'dropdown-trigger':'' ?>>
        <a href="<?= $node->getUrl() ?>"><?= $node->title ?></a>

        <?php if ($node->hasChildren()) : ?>

            <?php if ($root->getDepth() === 0) : ?>
            <div class="uk-dropdown uk-dropdown-navbar">
            <?php endif ?>

                <?php if ($root->getDepth() === 0) : ?>
                <ul class="uk-nav uk-nav-navbar">
                <?php elseif ($root->getDepth() === 1) : ?>
                <ul class="uk-nav-sub">
                <?php else : ?>
                <ul>
                <?php endif ?>
                    <?= $view->render('menu-navbar.php', ['root' => $node]) ?>
                </ul>

            <?php if ($root->getDepth() === 0) : ?>
            </div>
            <?php endif ?>

        <?php endif ?>

    </li>
    <?php endforeach ?>

<?php if ($root->getDepth() === 0) : ?>
</ul>
<?php endif ?>
<ul class="right hide-on-med-and-down">
  <li><a href="sass.html">Sass</a></li>
  <li><a href="badges.html">Components</a></li>
  <!-- Dropdown Trigger -->
  <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
</ul>

<!-- Dropdown Structure -->
<ul id="dropdown1" class="dropdown-content">
  <li><a href="#!">one</a></li>
  <li><a href="#!">two</a></li>
  <li class="divider"></li>
  <li><a href="#!">three</a></li>
</ul>
