import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | team display', function() {
  setupComponentTest('team-display', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#team-display}}
    //     template content
    //   {{/team-display}}
    // `);

    this.render(hbs`{{team-display}}`);
    expect(this.$()).to.have.length(1);
  });
});
