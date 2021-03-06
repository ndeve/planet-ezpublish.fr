<?php

namespace Planet\PlanetBundle\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\DependencyInjection\Loader;

/**
 * This is the class that loads and manages your bundle configuration
 *
 * To learn more see {@link http://symfony.com/doc/current/cookbook/bundles/extension.html}
 */
class PlanetExtension extends Extension
{
    /**
     * {@inheritDoc}
     */
    public function load(array $configs, ContainerBuilder $container)
    {
        $configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);

        $loader = new Loader\YamlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));
        $loader->load('services.yml');

        $settings = array();
        foreach ( $config['tree'] as $k => $val )
        {
            $container->setParameter( 'planet.tree.' . $k, $val );
        }
        foreach ( $config['page'] as $k => $val )
        {
            $container->setParameter( 'planet.page.' . $k, $val );
        }
        foreach ( $config['import'] as $k => $val )
        {
            $container->setParameter( 'planet.import.' . $k, $val );
        }
        foreach ( $config['feed'] as $k => $val )
        {
            $container->setParameter( 'planet.feed.' . $k, $val );
        }
    }
}
