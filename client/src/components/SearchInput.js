import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCards from './ImageCards';

export default function SearchInput() {
    const [jsonData, setJsonData] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // Fetch random images from the database when the component mounts
    useEffect(() => {
        const fetchRandomImages = async () => {
            try {
                const response = await fetch('http://localhost:3127/items');
                const jsonData = await response.json();
                setJsonData(jsonData);
                // Shuffle the jsonData array
                const shuffledData = shuffleArray(jsonData);
                // Slice the shuffled array to contain only the first 4 elements
                setFilteredData(shuffledData.slice(0, 6));
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchRandomImages();
    }, []); // Empty dependency array to ensure this effect runs only once on mount

    // Function to shuffle an array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3127/items');
            const jsonData = await response.json();
            setJsonData(jsonData);
            const filtered = jsonData.filter((item) => item.name.toLowerCase() === search.toLowerCase());
            setFilteredData(filtered);
        } catch (error) {
            console.error(error);
        }
        setSearch('');
    };

    return (
        <>
            <Navbar className="bg justify-content-between">
                <Form onSubmit={handleSearch}>
                    <Row className="row">
                        <Col xs="" style={{paddingLeft: "30px"}}>
                            <Form.Control type="text" placeholder="Search" className="mr-sm-2" value={search} onChange={(e) => setSearch(e.target.value)} />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" style={{backgroundColor: "lightblue", color:"black", borderColor:"#7adda0"}}>Search</Button>
                        </Col>
                    </Row>
                </Form>
            </Navbar>
            <ImageCards filteredData={filteredData} />
        </>
    );
}
