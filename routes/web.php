<?php

use App\Http\Controllers\IssueController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WirelessLocationController;
use App\Http\Controllers\WirelessSiteController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::controller(PageController::class)->middleware('auth')->group(function () {
    Route::get('/', 'index')->name('home');
});

Route::controller(WirelessSiteController::class)->middleware('auth')->group(function () {
    Route::get('/dashboard/wireless-sites', 'index')->name('wireless.sites.index');
    Route::post('/dashboard/wireless-sites', 'store')->name('wireless.sites.store');
    Route::get('/sites/{id}', 'show')->name('wireless.sites.show');
    Route::post('/dashboard/wireless-sites/{id}', 'update')->name('wireless.sites.update');
    Route::delete('/dashboard/wireless-sites/{id}', 'delete')->name('wireless.sites.delete');
});

Route::controller(IssueController::class)->middleware('auth')->group(function () {
    Route::post('/issues/store', 'store')->name('issues.store');
    Route::post('/issues/comment', 'comment_store')->name('issues.comment.store');
});




Route::controller(WirelessLocationController::class)->middleware('auth')->group(function () {
    Route::get('/dashboard/wireless-locations', 'index')->name('wireless.location.index');
    Route::post('/dashboard/wireless-locations', 'store')->name('wireless.location.store');
    Route::post('/dashboard/wireless-locations/{id}', 'update')->name('wireless.location.update');
    Route::delete('/dashboard/wireless-locations/{id}', 'delete')->name('wireless.location.delete');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');




Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
