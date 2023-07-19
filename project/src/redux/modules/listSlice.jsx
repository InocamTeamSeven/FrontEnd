// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const Address = 'http://43.201.22.74/api/post';

// // thunk
// // ---------------------------------------------------------------------------------------------------------------------
// // lists

// const __getLists = createAsyncThunk('getLists', async (_, thunkAPI) => {
//     try {
//         const res = await axios.get(Address);
//         return thunkAPI.fulfillWithValue(res.data);
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//     }
// });

// //! Moking Post
// // const __postLists = createAsyncThunk('postLists', async (payload, thunkAPI) => {
// //     try {
// //         await axios.post(Address, payload);
// //         console.log(payload);
// //         return payload;
// //     } catch (error) {
// //         return thunkAPI.rejectWithValue(error.message);
// //     }
// // });

// const __postLists = createAsyncThunk('postLists', async (payload, thunkAPI) => {
//     try {
//         const formData = new FormData();
//         formData.append('title', payload.title);
//         formData.append('contents', payload.contents);
//         formData.append('username', payload.username);
//         formData.append('password', payload.password);

//         // image가 없으면 보내지 않음!(빈객체, 더미 파일도 x)
//         if (payload.files) {
//             for (let i = 0; i < payload.files.length; i++) {
//                 formData.append('image', payload.files[i]);
//             }
//         }

//         // image 첨부
//         // if (payload.files) {
//         //     for (let i = 0; i < payload.files.length; i++) {
//         //         formData.append('image', payload.files[i]);
//         //     }
//         // } else {
//         //     formData.append('image', new File([], 'default.jpg'));
//         // }

//         // json 변환용 이미지를 제외한 나머지를 json으로 보낸다.

//         let jsonObject = {};
//         for (const [key, value] of formData.entries()) {
//             jsonObject[key] = value;
//         }
//         formData.append('json', JSON.stringify(jsonObject));

//         const response = await axios.post(Address, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         });

//         return response.data;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//     }
// });

// const __deleteLists = createAsyncThunk(
//     'deleteLists',
//     async (payload, thunkAPI) => {
//         try {
//             await axios.delete(`http://43.201.22.74/post/${payload}`);
//             return payload;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

// const __updateLists = createAsyncThunk(
//     'updateLists',
//     async (payload, thunkAPI) => {
//         try {
//             await axios.patch(
//                 `http://43.201.22.74/post/${payload.id}`,
//                 payload
//             );
//             return payload;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

// // ---------------------------------------------------------------------------------------------------------------------
// // comments

// const __getComments = createAsyncThunk('getComments', async (_, thunkAPI) => {
//     try {
//         const res = await axios.get('http://localhost:4000/comments');
//         return thunkAPI.fulfillWithValue(res.data);
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//     }
// });

// const __postComments = createAsyncThunk(
//     'postComments',
//     async (payload, thunkAPI) => {
//         try {
//             const res = await axios.post(
//                 'http://localhost:4000/comments',
//                 payload
//             );
//             return payload;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

// const __deleteComments = createAsyncThunk(
//     'deleteComments',
//     async (payload, thunkAPI) => {
//         try {
//             const response = await axios.delete(
//                 `http://localhost:4000/comments/${payload}`
//             );
//             // console.log("DeleteComments: ", response);
//             // console.log("payload : ", payload);
//             return payload;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

// const __updateComments = createAsyncThunk(
//     'updateComments',
//     async (payload, thunkAPI) => {
//         try {
//             await axios.patch(
//                 `http://localhost:4000/comments/${payload.id}`,
//                 payload
//             );
//             return payload;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

// const listSlice = createSlice({
//     name: 'listSlice',
//     initialState: {
//         lists: [],
//         comments: [],
//         isLoading: false,
//         isError: false,
//         error: null,
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         //! GetTodo
//         builder
//             .addCase(__getLists.pending, (state) => {
//                 state.isLoading = true;
//                 state.isError = false;
//             })
//             .addCase(__getLists.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.isError = false;
//                 state.lists = [...action.payload];
//             })
//             .addCase(__getLists.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.isError = true;
//             });
//         //! AddTodo
//         builder
//             .addCase(__postLists.pending, (state) => {
//                 state.isLoading = true;
//                 state.isError = false;
//             })
//             .addCase(__postLists.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.isError = false;
//                 state.lists = [...state.lists, action.payload];
//             })
//             .addCase(__postLists.rejected, (state) => {
//                 state.isLoading = false;
//                 state.isError = true;
//             });
//         //! DeleteTodo
//         builder
//             .addCase(__deleteLists.pending, (state) => {
//                 state.isLoading = true;
//                 state.isError = false;
//             })
//             .addCase(__deleteLists.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.isError = false;
//                 state.lists = [
//                     ...state.lists.filter((todo) => todo.id !== action.payload),
//                 ];
//             })
//             .addCase(__deleteLists.rejected, (state) => {
//                 state.isLoading = false;
//                 state.isError = true;
//             });
//         //! UpdateTodo
//         builder
//             .addCase(__updateLists.pending, (state) => {
//                 state.isLoading = true;
//                 state.isError = false;
//             })
//             .addCase(__updateLists.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.isError = false;
//                 state.lists = state.lists.map((todo) =>
//                     todo.id === action.payload.id
//                         ? { ...todo, content: action.payload.content }
//                         : todo
//                 );
//             })
//             .addCase(__updateLists.rejected, (state) => {
//                 state.isLoading = false;
//                 state.isError = true;
//             });

//         // ---------------------------------------------------------------------------------------------------------------------
//         // comments

//         //! GetComment
//         builder
//             .addCase(__getComments.pending, (state) => {
//                 state.isLoading = true;
//                 state.isError = false;
//             })
//             .addCase(__getComments.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.isError = false;
//                 state.comments = [...action.payload];
//             })
//             .addCase(__getComments.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.isError = true;
//             });
//         //! AddComment
//         builder
//             .addCase(__postComments.pending, (state) => {
//                 state.isLoading = true;
//                 state.isError = false;
//             })
//             .addCase(__postComments.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.isError = false;
//                 state.comments = [action.payload];
//             })
//             .addCase(__postComments.rejected, (state) => {
//                 state.isLoading = false;
//                 state.isError = true;
//             });
//         //! DeleteComment
//         builder
//             .addCase(__deleteComments.pending, (state) => {
//                 state.isLoading = true;
//                 state.isError = false;
//             })
//             .addCase(__deleteComments.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.isError = false;
//                 state.comments = [
//                     ...state.comments.filter(
//                         (comment) => comment.id !== action.payload
//                     ),
//                 ];
//             })
//             .addCase(__deleteComments.rejected, (state) => {
//                 state.isLoading = false;
//                 state.isError = true;
//             });
//         //! UpdateComment
//         builder
//             .addCase(__updateComments.pending, (state) => {
//                 state.isLoading = true;
//                 state.isError = false;
//             })
//             .addCase(__updateComments.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.isError = false;
//                 state.comments = state.lists.map((comment) =>
//                     comment.id === action.payload.id
//                         ? { ...comment, content: action.payload.content }
//                         : comment
//                 );
//             })
//             .addCase(__updateComments.rejected, (state) => {
//                 state.isLoading = false;
//                 state.isError = true;
//             });
//     },
// });

// export default listSlice.reducer;
// export {
//     __getLists,
//     __postLists,
//     __deleteLists,
//     __updateLists,
//     __getComments,
//     __postComments,
//     __deleteComments,
//     __updateComments,
// };
