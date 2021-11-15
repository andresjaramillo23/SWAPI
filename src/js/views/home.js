import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import useSWR from "swr";
import { fetcher } from "../fetcher";

export const Home = () => {
	const { data, error } = useSWR("/people", fetcher);
	console.log(data);

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			{data &&
				data.results.map((item, index) => {
					return (
						<div className="card" style={{ width: "18rem" }} key={index}>
							<img className="card-img-top" src="..." alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<h6 className="card-title">Card title</h6>
								<h6 className="card-title">Card title</h6>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the
								</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					);
				})}
		</div>
	);
};
