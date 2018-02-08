import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

class TabsExample extends React.Component {
    render() {
        return (
          <MuiThemeProvider>
              <Tabs>
                <Tab
                  icon={<FontIcon className="material-icons">phone</FontIcon>}
                  label="RECENTS">
                  <div>
                    <h2>Tab One</h2>
                    <p>This is an example tab.</p>
                  </div>
                </Tab>
                <Tab
                  icon={<FontIcon className="material-icons">favorite</FontIcon>}
                  label="FAVORITES">
                  <div>
                    <h2>Tab Two</h2>
                    <p>This is an example tab.</p>
                  </div>
                </Tab>
                <Tab
                  icon={<MapsPersonPin />}
                  label="NEARBY"
                />
              </Tabs>
          </MuiThemeProvider>
        );
    }
};

export {TabsExample};