// import React, { useState, useEffect } from 'react';
// import { Text, Image, View, FlatList, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useSelector } from 'react-redux';
// import tw from 'twrnc';
// import SwiperScreen from './SwiperScreen';
// import { supabase } from './supabase';
// import CartScreen from './CartScreen';

// function Second() {
//   const [products, setProducts] = useState([]);
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const navigation = useNavigation();
//   const cart = useSelector((state) => state.cart); // Access cart data from Redux
//   const cartCount = cart.length; // Calculate cart item count

//   // Fetch products from Supabase
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data, error } = await supabase
//           .from('Burger') // Replace 'Unit' with your table name
//           .select('*'); // Fetch all columns

//         if (error) {
//           console.error('Error fetching data:', error);
//         } else {
//           setProducts(data); // Set the fetched data to state
//         }
//       } catch (err) {
//         console.error('Unexpected error:', err);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleAddProduct = async () => {
//     // Validate the input
//     if (!name || !description || !price) {
//       Alert.alert('Error', 'Please fill out all fields.');
//       return;
//     }
  
//     try {
//       // Add new product to Supabase, excluding the 'id' field
//       const { data, error } = await supabase.from('Burger').insert([
//         {
//           name,
//           description,
//           price,
//           // 'id' will be auto-generated, so we don't include it
//         },
//       ]);
  
//       if (error) {
//         Alert.alert('Error', 'Failed to add product');
//         console.error('Error inserting product:', error);
//       } else {
//         Alert.alert('Success', 'Product added successfully');
//         // Optionally, reset input fields after successful insertion
//         setName('');
//         setDescription('');
//         setPrice('');
//       }
//     } catch (err) {
//       console.error('Unexpected error:', err);
//       Alert.alert('Error', 'An unexpected error occurred');
//     }
//   };
  
//   return (
//     <View style={tw`flex-1 bg-emerald-900`}>
//       {/* Swiper Screen */}
//       <SwiperScreen />

//       {/* Cart Count Badge */}
//       <TouchableOpacity
//         style={tw`absolute top-5 right-5`}
//         onPress={() => navigation.navigate('CartScreen')} // Replace with your cart screen
//       >
//         <View style={tw`relative `}>
//           <View style={tw`flex-row `}>
//             <Text style={tw`text-3xl mt-4`}>🛒</Text>
//           </View>
//           {cartCount > 0 && (
//             <View
//               style={tw`absolute -top-2 -right-2 bg-red-500 mt-3 rounded-full w-5 h-5 flex items-center justify-center`}
//             >
//               <Text style={tw`text-white text-xs`}>{cartCount}</Text>
//             </View>
//           )}
//         </View>
//       </TouchableOpacity>

//       {/* Product List */}
//       <View style={tw`flex-3`}>
//         <FlatList
//           data={products}
//           keyExtractor={(item) => item.id.toString()} // Ensure unique keys
//           renderItem={({ item }) => (
//             <TouchableOpacity onPress={() => handlePress(item)}>
//               <View style={tw`p-4 bg-teal-950 rounded-2xl shadow-lg m-4`}>
//                 {/* Product Image */}
//                 {item.image ? (
//                   <Image
//                     source={{
//                       uri: `https://abuntzklefmatwofckrx.supabase.co/storage/v1/object/public/images/${item.image}`,
//                     }}
//                     style={tw`w-full h-40 rounded-t-xl object-cover`}
//                   />
//                 ) : (
//                   <View style={tw`w-full h-40 bg-gray-200 rounded-t-xl justify-center items-center`}>
//                     <Text style={tw`text-gray-400 italic`}>Image Unavailable</Text>
//                   </View>
//                 )}

//                 {/* Product Details */}
//                 <View style={tw`p-4`}>
//                   {/* Product Name */}
//                   <Text style={tw`text-lg font-bold text-gray-900 mb-2 text-orange-600`}>{item.name}</Text>

//                   {/* Description */}
//                   <Text style={tw`text-sm text-gray-600 mb-4 text-slate-50`}>{item.description}</Text>

//                   {/* Price and Add to Cart */}
//                   <View style={tw`flex-row justify-between items-center`}>
//                     {/* Price */}
//                     <Text style={tw`text-xl font-bold text-orange-600`}>Rs. {item.price}</Text>

//                     {/* Add to Cart Button */}
//                     <TouchableOpacity
//                       style={tw`flex-row items-center bg-orange-500 px-4 py-2 rounded-lg shadow-md`}
//                     >
//                       <Text style={tw`text-white text-base font-bold mr-2`}>🛒</Text>
//                       <Text style={tw`text-white text-sm`}>ADD</Text>
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//       </View>

//       {/* Input Fields for New Product */}
//       <View style={tw`p-4 bg-white`}>
//         <TextInput
//           style={tw`p-2 mb-3 border border-gray-300 rounded`}
//           placeholder="Product Name"
//           value={name}
//           onChangeText={setName}
//         />
//         <TextInput
//           style={tw`p-2 mb-3 border border-gray-300 rounded`}
//           placeholder="Product Description"
//           value={description}
//           onChangeText={setDescription}
//         />
//         <TextInput
//           style={tw`p-2 mb-3 border border-gray-300 rounded`}
//           placeholder="Product Price"
//           value={price}
//           onChangeText={setPrice}
//           keyboardType="numeric"
//         />
//         <Button title="Add Product" onPress={handleAddProduct} />
//       </View>
//     </View>
//   );
// }

// export default Second;




// import React, { useState, useEffect } from 'react';
// import { Text, Image, View, FlatList, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import tw from 'twrnc';
// import { supabase } from './supabase';

// function Second() {
//   const [courses, setCourses] = useState([]);
//   const [offlineCourses, setOfflineCourses] = useState([]); // Courses available offline
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('');
//   const navigation = useNavigation();

//   // Fetch courses from Supabase
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const { data, error } = await supabase
//           .from('Courses') // Replace 'Burger' with your table name for courses
//           .select('*');

//         if (error) {
//           console.error('Error fetching data:', error);
//         } else {
//           setCourses(data);
//         }
//       } catch (err) {
//         console.error('Unexpected error:', err);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const handleAddCourse = async () => {
//     // Validate the input
//     if (!title || !description || !category) {
//       Alert.alert('Error', 'Please fill out all fields.');
//       return;
//     }

//     try {
//       const { data, error } = await supabase.from('Courses').insert([
//         {
//           title,
//           description,
//           category,
//         },
//       ]);

//       if (error) {
//         Alert.alert('Error', 'Failed to add course');
//         console.error('Error inserting course:', error);
//       } else {
//         Alert.alert('Success', 'Course added successfully');
//         setTitle('');
//         setDescription('');
//         setCategory('');
//       }
//     } catch (err) {
//       console.error('Unexpected error:', err);
//       Alert.alert('Error', 'An unexpected error occurred');
//     }
//   };

//   const handleDownloadCourse = (course) => {
//     // Simulate offline download by adding the course to offlineCourses
//     if (!offlineCourses.some((c) => c.id === course.id)) {
//       setOfflineCourses((prev) => [...prev, course]);
//       Alert.alert('Success', `${course.title} is now available offline.`);
//     } else {
//       Alert.alert('Info', `${course.title} is already available offline.`);
//     }
//   };

//   return (
//     <View style={tw`flex-1 bg-blue-900`}>
//       {/* Course List */}
//       <View style={tw`flex-3`}>
//         <FlatList
//           data={courses}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <TouchableOpacity>
//               <View style={tw`p-4 bg-blue-950 rounded-2xl shadow-lg m-4`}>
//                 {/* Course Image */}
//                 {item.image ? (
//                   <Image
//                     source={{
//                       uri: `https://abuntzklefmatwofckrx.supabase.co/storage/v1/object/public/images/${item.image}`,
//                     }}
//                     style={tw`w-full h-40 rounded-t-xl object-cover`}
//                   />
//                 ) : (
//                   <View style={tw`w-full h-40 bg-gray-200 rounded-t-xl justify-center items-center`}>
//                     <Text style={tw`text-gray-400 italic`}>Image Unavailable</Text>
//                   </View>
//                 )}

//                 {/* Course Details */}
//                 <View style={tw`p-4`}>
//                   <Text style={tw`text-lg font-bold text-gray-900 mb-2 text-orange-600`}>{item.title}</Text>
//                   <Text style={tw`text-sm text-gray-600 mb-4 text-slate-50`}>{item.description}</Text>
//                   <Text style={tw`text-sm text-gray-500 mb-4 text-slate-50`}>{item.category}</Text>

//                   {/* Download Button */}
//                   <TouchableOpacity
//                     onPress={() => handleDownloadCourse(item)}
//                     style={tw`flex-row items-center bg-orange-500 px-4 py-2 rounded-lg shadow-md`}
//                   >
//                     <Text style={tw`text-white text-base font-bold mr-2`}>⬇️</Text>
//                     <Text style={tw`text-white text-sm`}>Download</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//       </View>

//       {/* Input Fields for New Course */}
//       <View style={tw`p-4 bg-white`}>
//         <TextInput
//           style={tw`p-2 mb-3 border border-gray-300 rounded`}
//           placeholder="Course Title"
//           value={title}
//           onChangeText={setTitle}
//         />
//         <TextInput
//           style={tw`p-2 mb-3 border border-gray-300 rounded`}
//           placeholder="Course Description"
//           value={description}
//           onChangeText={setDescription}
//         />
//         <TextInput
//           style={tw`p-2 mb-3 border border-gray-300 rounded`}
//           placeholder="Course Category"
//           value={category}
//           onChangeText={setCategory}
//         />
//         <Button title="Add Course" onPress={handleAddCourse} />
//       </View>

//       {/* Offline Courses */}
//       {offlineCourses.length > 0 && (
//         <View style={tw`p-4 bg-green-50`}>
//           <Text style={tw`text-lg font-bold mb-2`}>Offline Courses:</Text>
//           {offlineCourses.map((course) => (
//             <Text key={course.id} style={tw`text-sm text-gray-600`}>
//               {course.title}
//             </Text>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// }

// export default Second;


//quizes

import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import tw from 'twrnc';
import { supabase } from './supabase';

function Second() {
  const [quizzes, setQuizzes] = useState([]);
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [performance, setPerformance] = useState([]); // Tracks quiz results

  // Fetch quizzes from Supabase
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const { data, error } = await supabase
          .from('Quizes')
          .select('*');

        if (error) {
          console.error('Error fetching data:', error);
        } else {
          setQuizzes(data);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

    fetchQuizzes();
  }, []);

  const handleSubmitAnswer = (quizId, correct) => {
    const isCorrect = userAnswer.trim().toLowerCase() === correct.toLowerCase();
    Alert.alert(
      'Result',
      isCorrect ? 'Correct Answer! 🎉' : 'Wrong Answer. Try Again!',
    );

    // Update performance
    setPerformance((prev) => [
      ...prev,
      { quizId, status: isCorrect ? 'Correct' : 'Incorrect' },
    ]);
    setUserAnswer('');
  };

  const handleAddQuiz = async () => {
    // Validate input
    if (!Title || !Questions || !Answer) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    try {
      const { data, error } = await supabase.from('Quizes').insert([
        {
          Title,
          Questions,
          Answer,
        },
      ]);

      if (error) {
        Alert.alert('Error', 'Failed to add quiz');
        console.error('Error inserting quiz:', error);
      } else {
        Alert.alert('Success', 'Quiz added successfully');
        setTitle('');
        setQuestion('');
        setCorrectAnswer('');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      Alert.alert('Error', 'An unexpected error occurred');
    }
  };

  return (
    <View style={tw`flex-1 bg-indigo-900`}>      
      <FlatList
        data={quizzes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={tw`p-4 bg-indigo-800 rounded-xl shadow-md m-3`}>            
            <View>
              <Text style={tw`text-lg font-bold text-white mb-2`}>{item.title}</Text>
              <Text style={tw`text-sm text-gray-200 mb-4`}>{item.question}</Text>

              <TextInput
                style={tw`p-2 border border-gray-300 rounded bg-white mb-3`}
                placeholder="Your Answer"
                value={userAnswer}
                onChangeText={setUserAnswer}
              />

              <TouchableOpacity
                onPress={() => handleSubmitAnswer(item.id, item.correctAnswer)}
                style={tw`bg-orange-500 px-4 py-2 rounded shadow-md`}
              >
                <Text style={tw`text-white text-sm text-center font-bold`}>Submit Answer</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Input Fields for New Quiz */}
      <View style={tw`p-4 bg-white rounded-t-3xl shadow-lg`}>        
        <TextInput
          style={tw`p-2 mb-3 border border-gray-300 rounded`}
          placeholder="Quiz Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={tw`p-2 mb-3 border border-gray-300 rounded`}
          placeholder="Quiz Question"
          value={question}
          onChangeText={setQuestion}
        />
        <TextInput
          style={tw`p-2 mb-3 border border-gray-300 rounded`}
          placeholder="Correct Answer"
          value={correctAnswer}
          onChangeText={setCorrectAnswer}
        />
        <TouchableOpacity
          onPress={handleAddQuiz}
          style={tw`bg-green-500 px-4 py-3 rounded shadow-md`}
        >
          <Text style={tw`text-white text-sm text-center font-bold`}>Add Quiz</Text>
        </TouchableOpacity>
      </View>

      {/* Performance Analytics */}
      {performance.length > 0 && (
        <View style={tw`p-4 bg-yellow-50`}>          
          <Text style={tw`text-lg font-bold mb-2`}>Performance Analytics:</Text>
          {performance.map((result, index) => (
            <Text key={index} style={tw`text-sm text-gray-600`}>
              Quiz {result.quizId}: {result.status}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

export default Second;

// import React from 'react';
// import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
// import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
// import tw from 'twrnc';

// const Second = () => {
//   return (
//     <View style={tw`flex-1 bg-gray-100`}>
//       {/* Header */}
//       <View style={tw`flex-row justify-between items-center p-4 bg-purple-700`}>
//         <Text style={tw`text-xl font-bold text-white`}>Course Dashboard</Text>
//         <FontAwesome name="user-circle" size={28} color="white" />
//       </View>

//       {/* Welcome Section */}
//       <View style={tw`p-4 bg-purple-100`}>
//         <Text style={tw`text-lg text-purple-800`}>Welcome Back,</Text>
//         <Text style={tw`text-2xl font-bold text-purple-900`}>Education App</Text>
//       </View>

//       {/* Features */}
//       <ScrollView style={tw`flex-1`} contentContainerStyle={tw`p-4`}>
//         {/* Personalized Learning Path */}
//         <View style={tw`bg-white rounded-lg shadow p-4 mb-4`}>
//           <View style={tw`flex-row items-center`}>
//             <MaterialIcons name="school" size={24} color="purple" />
//             <Text style={tw`ml-3 text-lg font-bold text-purple-800`}>
//               Personalized Learning
//             </Text>
//           </View>
//           <Text style={tw`mt-2 text-gray-600`}>
//             Tailored learning paths and custom schedules to match your goals.
//           </Text>
//         </View>

//         {/* Gamification */}
//         <View style={tw`bg-white rounded-lg shadow p-4 mb-4`}>
//           <View style={tw`flex-row items-center`}>
//             <FontAwesome name="trophy" size={24} color="gold" />
//             <Text style={tw`ml-3 text-lg font-bold text-yellow-700`}>
//               Gamification
//             </Text>
//           </View>
//           <Text style={tw`mt-2 text-gray-600`}>
//             Earn rewards and climb leaderboards as you progress.
//           </Text>
//         </View>

//         {/* Progress Tracking */}
//         <View style={tw`bg-white rounded-lg shadow p-4 mb-4`}>
//           <View style={tw`flex-row items-center`}>
//             <FontAwesome name="line-chart" size={24} color="green" />
//             <Text style={tw`ml-3 text-lg font-bold text-green-700`}>
//               Progress Tracking
//             </Text>
//           </View>
//           <Text style={tw`mt-2 text-gray-600`}>
//             Visual dashboards to track weekly productivity and set goals.
//           </Text>
//         </View>

//         {/* Community and Collaboration */}
//         <View style={tw`bg-white rounded-lg shadow p-4 mb-4`}>
//           <View style={tw`flex-row items-center`}>
//             <MaterialIcons name="group" size={24} color="blue" />
//             <Text style={tw`ml-3 text-lg font-bold text-blue-800`}>
//               Community
//             </Text>
//           </View>
//           <Text style={tw`mt-2 text-gray-600`}>
//             Join groups, discuss topics, and collaborate with peers.
//           </Text>
//         </View>
//       </ScrollView>

//       {/* Bottom Navigation */}
//       <View style={tw`flex-row justify-around items-center bg-purple-700 py-3`}>
//         <FontAwesome name="home" size={24} color="white" />
//         <FontAwesome name="book" size={24} color="white" />
//         <FontAwesome name="bell" size={24} color="white" />
//         <FontAwesome name="cog" size={24} color="white" />
//       </View>
//     </View>
//   );
// };

// export default Second;


// gamification
// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
// import tw from 'twrnc';
// import { supabase } from './supabase'; // Replace with your actual Supabase setup

// function Second() {
//   const [points, setPoints] = useState(0);
//   const [leaderboard, setLeaderboard] = useState([]);
//   const [milestones, setMilestones] = useState([
//     { id: 1, name: 'Complete First Lesson', points: 10, completed: false },
//     { id: 2, name: 'Finish 5 Quizzes', points: 50, completed: false },
//     { id: 3, name: 'Achieve 100 Points', points: 100, completed: false },
//   ]);

//   useEffect(() => {
//     fetchLeaderboard();
//   }, []);

//   const fetchLeaderboard = async () => {
//     try {
//       const { data, error } = await supabase
//         .from('Leaderboard')
//         .select('*')
//         .order('points', { ascending: false });

//       if (error) {
//         console.error('Error fetching leaderboard:', error);
//       } else {
//         setLeaderboard(data);
//       }
//     } catch (err) {
//       console.error('Unexpected error:', err);
//     }
//   };

//   const completeMilestone = (milestone) => {
//     if (milestone.completed) {
//       Alert.alert('Already Completed', `${milestone.name} is already completed.`);
//       return;
//     }

//     setPoints(points + milestone.points);
//     setMilestones((prevMilestones) =>
//       prevMilestones.map((m) =>
//         m.id === milestone.id ? { ...m, completed: true } : m
//       )
//     );

//     Alert.alert(
//       'Milestone Completed!',
//       `You earned ${milestone.points} points! 🎉`
//     );

//     updateLeaderboard(points + milestone.points);
//   };

//   const updateLeaderboard = async (newPoints) => {
//     try {
//       const user = { username: 'User1', points: newPoints }; // Replace 'User1' with actual user data
//       const { data, error } = await supabase
//         .from('Leaderboard')
//         .upsert(user, { onConflict: 'username' });

//       if (error) {
//         console.error('Error updating leaderboard:', error);
//       } else {
//         fetchLeaderboard(); // Refresh leaderboard
//       }
//     } catch (err) {
//       console.error('Unexpected error:', err);
//     }
//   };

//   return (
//     <View style={tw`flex-1 bg-gray-100`}>
//       {/* Header */}
//       <View style={tw`bg-purple-900 py-4`}>
//         <Text style={tw`text-white text-center text-xl font-bold`}>
//           Gamification
//         </Text>
//       </View>

//       {/* Reward Points */}
//       <View style={tw`p-4 bg-yellow-200 flex-row justify-between items-center`}>
//         <Text style={tw`text-lg font-bold text-gray-700`}>Total Points:</Text>
//         <Text style={tw`text-xl font-bold text-green-700`}>{points} pts</Text>
//       </View>

//       {/* Milestones */}
//       <View style={tw`p-4`}>
//         <Text style={tw`text-lg font-bold mb-2`}>Milestones:</Text>
//         <FlatList
//           data={milestones}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={tw`p-3 mb-2 rounded-lg ${
//                 item.completed ? 'bg-green-300' : 'bg-blue-300'
//               }`}
//               onPress={() => completeMilestone(item)}
//             >
//               <Text style={tw`text-gray-800 font-bold`}>{item.name}</Text>
//               <Text style={tw`text-sm text-gray-600`}>
//                 Points: {item.points}
//               </Text>
//             </TouchableOpacity>
//           )}
//         />
//       </View>

//       {/* Leaderboard */}
//       <View style={tw`p-4 bg-white rounded-t-3xl shadow-lg`}>
//         <Text style={tw`text-lg font-bold text-gray-700 mb-3`}>Leaderboard:</Text>
//         <FlatList
//           data={leaderboard}
//           keyExtractor={(item) => item.username}
//           renderItem={({ item, index }) => (
//             <View
//               style={tw`p-3 flex-row justify-between items-center ${
//                 index === 0
//                   ? 'bg-yellow-300'
//                   : index === 1
//                   ? 'bg-gray-300'
//                   : index === 2
//                   ? 'bg-orange-300'
//                   : 'bg-gray-100'
//               } rounded-lg mb-2`}
//             >
//               <Text style={tw`text-gray-800 font-bold`}>
//                 {index + 1}. {item.username}
//               </Text>
//               <Text style={tw`text-gray-800`}>{item.points} pts</Text>
//             </View>
//           )}
//         />
//       </View>
//     </View>
//   );
// }

// export default Second;

