import { constants } from 'fs'
import './Card.scss'

interface ICardProps {
	bed: number
	bath: number
	location: string
	sqft: number
	cost: number
	src: string
}

export const Card = ({ bed, bath, location, sqft, cost, src }: ICardProps) => {
	return (
		<div className="wrapper">
			<img src="" alt="" />
			<div className="cols">
				<div className="col">
					<div className="container">
						<div className="front" style={{backgroundImage: `url(${src})`}}>
							<div className="inner">
								<span>{location}</span>
							</div>
						</div>
						<div className="back">
							<div className="inner">
								<p>
									{bed} bed
								</p>
								<p>
									{bath} bath
								</p>
								<p>
									{sqft} sqft
								</p>
								<p>
									{cost}$
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
