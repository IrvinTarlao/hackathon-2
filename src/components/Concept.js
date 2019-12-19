import React from 'react';
import { Container, Jumbotron, Button } from 'reactstrap';
import './concept.css'
import { Link } from "react-router-dom";
import NavBar from './NavBar';

export default class Concept extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    };

    render(){
        return(
            
            <div>
                <NavBar/>
                {/* <img className="concept_first_img" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"></img> */}
                <div className="concept_second_img"></div>
                <Jumbotron className="concept_jumb">
                    <Container>
                    <h4 className="display-3">Notre mission, vous faire partager plus de moments en famille !</h4>
                    <p className="lead">Metuentes igitur idem latrones Lycaoniam magna parte campestrem cum se inpares nostris fore congressione stataria documentis frequentibus scirent, tramitibus deviis petivere Pamphyliam diu quidem intactam sed timore populationum et caedium, milite per omnia diffuso propinqua, magnis undique praesidiis conmunitam.
                    Eius populus ab incunabulis primis ad usque pueritiae tempus extremum, quod annis circumcluditur fere trecentis, circummurana pertulit bella, deinde aetatem ingressus adultam post multiplices bellorum aerumnas Alpes transcendit et fretum, in iuvenem erectus et virum ex omni plaga quam orbis ambit inmensus, reportavit laureas et triumphos, iamque vergens in senium et nomine solo aliquotiens vincens ad tranquilliora vitae discessit.
                    Thalassius vero ea tempestate praefectus praetorio praesens ipse quoque adrogantis ingenii, considerans incitationem eius ad multorum augeri discrimina, non maturitate vel consiliis mitigabat, ut aliquotiens celsae potestates iras principum molliverunt, sed adversando iurgandoque cum parum congrueret, eum ad rabiem potius evibrabat, Augustum actus eius exaggerando creberrime docens, idque, incertum qua mente, ne lateret adfectans. quibus mox Caesar acrius efferatus, velut contumaciae quoddam vexillum altius erigens, sine respectu salutis alienae vel suae ad vertenda opposita instar rapidi fluminis irrevocabili impetu ferebatur.</p>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                    <Link to="/formulaireDeConnexion">Accéder aux activités</Link>
                    </p>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}