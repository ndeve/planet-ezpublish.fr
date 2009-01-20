{* DO NOT EDIT THIS FILE! Use an override template instead. *}
     {section show=$validation.processed}
        {section show=or($validation.attributes,$validation.placement)}

          <div class="warning">
          {section show=and($validation.attributes,$validation.placement)}
            <h2>{"Validation failed"|i18n("design/standard/content/edit")}</h2>
          {section-else}
            {section show=$validation.attributes}
            <h2>{"Input did not validate"|i18n("design/standard/content/edit")}</h2>
            {section-else}
            <h2>{"Location did not validate"|i18n("design/standard/content/edit")}</h2>
            {/section}
          {/section}
          <ul>
          {section name=UnvalidatedPlacements loop=$validation.placement show=$validation.placement}
            <li>{$:item.text}</li>
          {/section}
          {section name=UnvalidatedAttributes loop=$validation.attributes show=$validation.attributes}
            <li>{$:item.name|wash}: {$:item.description}</li>
          {/section}
          </ul>
          </div>

        {section-else}
	  {section show=$validation_log}
	  <div class="warning">
          <h2>{"Input was partially stored"|i18n("design/standard/content/edit")}</h2>
	      {section name=ValidationLog loop=$validation_log}
                  <h4>{$:item.name|wash}:</h4>
	          <ul>
	          {section name=LogMessage loop=$:item.description}
	              <li>{$:item}</li>
	          {/section}
                  </ul>
              {/section}
          </div>
	  {section-else}
          <div class="feedback">
          <h2>{"Input was stored successfully"|i18n("design/standard/content/edit")}</h2>
          </div>
	  {/section}
        {/section}
    {/section}