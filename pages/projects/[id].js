import { useRouter } from 'next/router';
import React from 'react';

const ProjectDetail = () => {
  const router = useRouter();
  const query = router.query;
  const { title } = query;

  return <div>{title}</div>;
};

export default ProjectDetail;
