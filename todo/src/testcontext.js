import React ,{useContext} from 'react'
// import Site from './components/site'
// import Theme from './components/theme'
// import ContentClass from './components/content-class'
// import Contentfunction from './components/content-function'
// import {ThemeContext} from './context/theme' //just to show we can have it in this level
import FilterForm from '../src/components/todo/filterPar'
import {SettingContext} from './context/numContext'
export default  class TestContext extends React.Component{
    //static contextType=ThemeContext;
    render()
    {
        const context = useContext(SettingContext);
        return(
            <>

            <FilterForm/>
                {/* <main className={this.context.mode}>
                    <section>
                        <ContentClass/>
                    </section>
                    <section>
                        <Contentfunction/>
                    </section>
                    <section>
                        <Site/>
                    </section>
                    <section>
                        <Theme/>
                    </section>
                </main> */}
            </>
        )
    }
}