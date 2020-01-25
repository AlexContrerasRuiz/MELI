import React, { useEffect } from 'react';

export default function Home({reset}) {
  useEffect(() => reset(), []);
  return <div></div>;
}
