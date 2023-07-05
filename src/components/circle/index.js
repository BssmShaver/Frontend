import * as S from "./style";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Circle({title, abc}) {
    return ( 
        <S.A>
        <h1>{title}</h1>
        <S.Border>
            <CircularProgressbarWithChildren
				value={abc}
				text={abc + "%"}
				styles={buildStyles({
				strokeLinecap: 'butt',
			    athTransitionDuration: 0.5,
                pathColor: `rgba(0, 132, 219)`,
				trailColor: '#EFF4F4',
				backgroundColor: '#3e98c7',
				})}
			/>
        </S.Border>
        </S.A>
     );
}
 
export default Circle;