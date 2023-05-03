import React from "react";
import Card from "@/components/organisms/Card";

type Props = {
 results: any[];
};

const Results: React.FC<Props> = ({ results }) => {
 return (
  <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-width-6xl mx-auto py-4">
   {results.map((result: any) => (
    <Card key={result.id} result={result} />
   ))}
  </div>
 );
};

export default Results;
