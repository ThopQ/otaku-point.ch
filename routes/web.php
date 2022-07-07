<?php

use Illuminate\Support\Facades\Route;
use App\Http\Requests\StoreMemberRequest;
use Illuminate\Support\Facades\Mail;
use App\Mail\MemberRegistered;
use Inertia\Inertia;

use App\Models\Member;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('welcome');

Route::get('/impressum', function () {
    return Inertia::render('Welcome', ['impressumModal' => true]);
})->name('impressum');

Route::post('/members', function (StoreMemberRequest $request) {
    Member::create($request->validated());
    Mail::to($request->validated()['email'])->send(new MemberRegistered);

    return back();
})->name('members.store');

/*
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
*/