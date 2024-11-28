<div class="slider-home">
    <div class="slider-elements">

        <?php if( have_rows('slide') ): 
        while( have_rows('slide') ) : the_row(); ?>

            <div class="slider-elements__content <?php the_sub_field('distribucion', 'options'); ?>" style="<?php the_sub_field('color_de_fondo', 'options'); ?>>
                <div class="slider-elements__imagen">
                    <img src="<?php the_sub_field('imagen', 'options'); ?>" alt="" class="slider-elements__img">
                </div>
                <div class="slider-elements__rich-text">
                    <div class="slider-elements___field"><?php the_sub_field('textos_de_slide'); ?></div>
                    <a href="<?php the_sub_field('btn_text', 'options'); ?>" class="slider-elements__btn"><?php the_sub_field('ulr_btn', 'options'); ?></a>
                </div>
            </div>

        <?php  endwhile;
        endif; ?>

    </div>
</div>
